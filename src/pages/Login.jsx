import Button from "../components/Button/Button"
import { useNavigate } from "react-router-dom"

const Login = ({ LogInAction , loggedIn}) => {
  const navigate = useNavigate();
  const loginHandler = () => {
    LogInAction();
    navigate('/');
  }

  return (
    <>
      <Button onClick={loginHandler} text= {loggedIn ? "Log out" : "Log in" }/>
    </>
  );
};
  
export default Login;