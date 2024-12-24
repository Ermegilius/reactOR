import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button/Button';
import styles from './Login.module.css';

const Login = ({ LogInAction, loggedIn }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://reactor-uinv.onrender.com/users');
        if (!response.ok) {
          throw new Error("Network error. Can't get users db");
        }
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        setError('Failed to fetch users');
      }
    };

    fetchUsers();
  }, []);

  const loginHandler = (e) => {
    e.preventDefault();
    const user = users.find(user => user.username === username && user.password === password);
    if (user) {
      LogInAction(user.userId, username, password);
      navigate('/');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className={styles.container}>
      <h2>Login</h2>
      <form onSubmit={loginHandler}>
        <div className={styles['form-group']}>
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
        <div className={styles['form-group']}>
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