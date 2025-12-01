import React from "react";

export default function Ques2() {
  const isLoggedIn = true; // change to false to test

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      {isLoggedIn ? (
        <h2>Welcome back!</h2>
      ) : (
        <h2>Please log in</h2>
      )}
    </div>
  );
}