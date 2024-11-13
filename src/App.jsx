import './App.css'
import EmployeeList from './components/EmployeeList/EmployeeList.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import { useState } from 'react'

function App() {

  const [isLoggedIn, setLogIn] = useState(false);
  
  const handleLogIn = () => {
    setLogIn(!isLoggedIn);
  };

  return (
    <>
      <Header/>
      <main>
        <button onClick={handleLogIn}>
          {isLoggedIn ? 'Log out' : 'Log in'}
        </button>
        {isLoggedIn ? <EmployeeList/> : <p>Please log in again</p>}
      </main>
      <Footer/>
    </>
  );
}

export default App;
