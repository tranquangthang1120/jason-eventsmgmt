import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username,
      password,
      email,
    };

    try {
      const response = await axios.post("/api/users", data);
      if (response.status === 201) {
        setUsername("");
        setPassword("");
        setEmail("");

        alert("Đăng ký thành công!");
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    const loadUsers = async () => {
      const response = await axios.get("/api/users");
      if (response.status === 200) {
        const users = response.data;
        console.log(users);
      }
    };

    loadUsers();
  }, []);

  return (
    <div className="container">
      <h1>Đăng ký</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tên người dùng"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">Đăng ký</button>
      </form>
    </div>
  );
};

export default SignUp;
