import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button/Button";
import styles from "./Login.module.css";
import useAxios from "../utilis/useAxios.js";
import { backEndUrl } from "../data/globalVariables.js";

const Login = ({ LogInAction }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { get } = useAxios(backEndUrl);
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    setError("Please wait, loading users...");
    try {
      const fetchedUsers = await get("/users");
      const user = fetchedUsers.find(
        (user) => user.username === username && user.password === password
      );
      if (user) {
        LogInAction(user);
        navigate("/");
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("Failed to fetch users");
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={loginHandler}>
        <div className={styles["form-group"]}>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            autoComplete="username"
          />
        </div>
        <div className={styles["form-group"]}>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            autoComplete="current-password"
          />
        </div>
        {error && <p className={styles.error}>{error}</p>}
        <Button type="submit" text="Log in" className={styles.loginButton} />
      </form>
    </div>
  );
};

export default Login;
