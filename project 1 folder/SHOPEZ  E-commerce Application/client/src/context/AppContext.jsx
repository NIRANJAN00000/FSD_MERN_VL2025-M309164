import React, { createContext, useContext, useState, useEffect } from 'react';
import SessionManager from '../utils/SessionManager';
import apiClient from '../utils/apiClient';

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedUser = SessionManager.getUser();
    if (storedUser && SessionManager.isAuthenticated()) {
      setUser(storedUser);
      loadCartFromAPI(storedUser.id);
    } else {
      const storedCart = localStorage.getItem('shopez_cart');
      if (storedCart) {
        setCart(JSON.parse(storedCart));
      }
    }
  }, []);

  // Save cart to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('shopez_cart', JSON.stringify(cart));
  }, [cart]);

  const loadCartFromAPI = async (userId) => {
    try {
      const response = await apiClient.get(`/cart/user/${userId}`);
      setCart(response.data);
    } catch (error) {
      console.error('Error loading cart:', error);
    }
  };

  const login = (userData) => {
    setUser(userData);
    if (userData.id) {
      loadCartFromAPI(userData.id);
    }
  };

  const logout = () => {
    setUser(null);
    setCart([]);
    SessionManager.clearSession();
    localStorage.removeItem('shopez_cart');
  };

  const addToCart = async (product) => {
    if (user && user.id) {
      await loadCartFromAPI(user.id);
    } else {
     
      setCart(prev => {
        const productId = product.productId || product._id;
        const existingItem = prev.find(item => (item.productId === productId || item._id === productId) && item.size === product.size);
        if (existingItem) {
          return prev.map(item => 
            (item.productId === productId || item._id === productId) && item.size === product.size
              ? { ...item, quantity: item.quantity + (product.quantity || 1) }
              : item
          );
        }
        return [...prev, { ...product, productId: productId }];
      });
    }
  };

  const removeFromCart = async (productId, size) => {
    try {
      if (user) {
        const item = cart.find(item => item.productId === productId && item.size === size);
        if (item && item._id) {
          await apiClient.delete(`/cart/${item._id}`);
          await loadCartFromAPI(user.id);
        }
      } else {
        setCart(prev => prev.filter(item => !((item.productId === productId || item._id === productId) && item.size === size)));
      }
    } catch (error) {
      console.error('Error removing from cart:', error);
    }
  };

  const updateCartQuantity = async (productId, size, quantity) => {
    try {
      if (user) {
        const item = cart.find(item => item.productId === productId && item.size === size);
        if (item && item._id) {
          await apiClient.put(`/cart/${item._id}`, { quantity });
          await loadCartFromAPI(user.id);
        }
      } else {
        setCart(prev => prev.map(item => 
          (item.productId === productId || item._id === productId) && item.size === size ? { ...item, quantity } : item
        ));
      }
    } catch (error) {
      console.error('Error updating cart:', error);
    }
  };

  const clearCart = async () => {
    try {
      if (user && user.id) {
        await apiClient.delete(`/cart/user/${user.id}`);
      }
      setCart([]);
    } catch (error) {
      console.error('Error clearing cart:', error);
    }
  };

  const value = {
    user,
    cart,
    products,
    setProducts,
    login,
    logout,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    fetchCart: loadCartFromAPI
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};