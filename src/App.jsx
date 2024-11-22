import './App.css'
import createRoutes from "./routes/appRoutes.jsx";
import { RouterProvider } from "react-router-dom";

function App() {

  /* const [isLoggedIn, setLogIn] = useState(false);
  const handleLogIn = () => {
  setLogIn((prevState) => !prevState);
  }; */

  return (
    <RouterProvider
      router={createRoutes}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

export default App;
