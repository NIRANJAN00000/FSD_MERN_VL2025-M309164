import React, { useEffect, useState } from "react";

const Ques18 = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 5;

  // Fetch 20 users
  useEffect(() => {
    fetch("https://dummyjson.com/users?limit=20")
      .then((res) => res.json())
      .then((data) => setUsers(data.users))
      .catch((err) => console.error(err));
  }, []);

  // Calculate page data
  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = users.slice(indexOfFirstUser, indexOfLastUser);

  // Handle page change
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < Math.ceil(users.length / usersPerPage))
      setCurrentPage(currentPage + 1);
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto" }}>
      <h2>Users List</h2>
      {currentUsers.length === 0 ? (
        <p>Loading users...</p>
      ) : (
        <ul>
          {currentUsers.map((user) => (
            <li key={user.id}>
              {user.firstName} {user.lastName} - {user.email}
            </li>
          ))}
        </ul>
      )}
      <div style={{ marginTop: "20px" }}>
        <button onClick={handlePrev} disabled={currentPage === 1}>
          Prev
        </button>
        <span style={{ margin: "0 10px" }}>Page {currentPage}</span>
        <button
          onClick={handleNext}
          disabled={currentPage === Math.ceil(users.length / usersPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Ques18;
