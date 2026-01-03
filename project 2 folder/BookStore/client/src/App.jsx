import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./User/Login";
import Signup from "./User/Signup";
import Asignup from "./Admin/Asignup";
import Alogin from "./Components/ALogin";
import Ahome from "./Admin/Ahome";
import Users from "./Admin/Users";
import Seller from "./Admin/Seller";
import Items from "./Admin/items";
import Aorders from "./Admin/Aorders";

// Seller Components
import Uhome from "./User/Uhome";
import Products from "./User/Products";
import Uitem from "./User/Uitem";
import MyOrders from "./User/MyOrders";

import Ssignup from "./Seller/Ssignup";
import Slogin from "./Seller/Slogin";
import Shome from "./Seller/Shome";
import MyProducts from "./Seller/MyProducts";
import Addbook from "./Seller/Addbook";
import SOrders from "./Seller/Orders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} /> {/* Added this route */}
        {/* Admin Routes */}
        <Route path="/asignup" element={<Asignup />} />
        <Route path="/alogin" element={<Alogin />} />
        <Route path="/ahome" element={<Ahome />} />
        <Route path="/ausers" element={<Users />} />
        <Route path="/asellers" element={<Seller />} />
        <Route path="/aitems" element={<Items />} />
        <Route path="/aorders/:userId" element={<Aorders />} />
        {/* Seller Routes */}
        <Route path="/ssignup" element={<Ssignup />} />
        <Route path="/slogin" element={<Slogin />} />
        <Route path="/shome" element={<Shome />} />
        <Route path="/myproducts" element={<MyProducts />} />
        <Route path="/addbook" element={<Addbook />} />
        <Route path="/sorders" element={<SOrders />} />
        {/* User Routes */}
        <Route path="/uhome" element={<Uhome />} />
        <Route path="/products" element={<Products />} />
        <Route path="/uitem/:id" element={<Uitem />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
