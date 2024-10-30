import './App.css';
import EmployeeList from './components/EmployeeList.jsx';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <>
      <Header/>
      <main>
        <EmployeeList/>
      </main>
      <Footer/>
    </>
  );
}

export default App;
