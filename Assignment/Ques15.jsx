import React, { useState } from "react";

const Ques15 = () => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    phone: ""
  });

  // Handle changes for each input
  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value, // dynamically update the correct field
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Profile</h1>

      <div style={{ display: "flex", flexDirection: "column", gap: "15px", width: "300px" }}>
        
        {/* Name Input */}
        <input
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          placeholder="Enter name"
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          placeholder="Enter email"
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

        {/* Phone Input */}
        <input
          type="text"
          name="phone"
          value={profile.phone}
          onChange={handleChange}
          placeholder="Enter phone number"
          style={{
            padding: "8px",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />

      </div>

      <h2 style={{ marginTop: "30px" }}>Profile Preview</h2>
      <p><strong>Name:</strong> {profile.name}</p>
      <p><strong>Email:</strong> {profile.email}</p>
      <p><strong>Phone:</strong> {profile.phone}</p>
    </div>
  );
};

export default Ques15;
