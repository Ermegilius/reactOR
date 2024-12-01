import { useState } from 'react';
import { RouterProvider } from "react-router-dom";
import './App.css';
import { router } from "./routes/appRoutes.jsx";

function App() {
  const [isLoggedIn, setLogIn] = useState(false);

  const toggleLogIn = () => {
    setLogIn((prevState) => !prevState);
  };

  const createRoutes = router(isLoggedIn, toggleLogIn);

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