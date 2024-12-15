import { createBrowserRouter, Navigate } from "react-router-dom";
import Root from "../pages/Root";
import List from "../pages/List";
import Form from "../pages/Form";
import Login from "../pages/Login";
import ErrorPage from "../pages/ErrorPage";
import SinglePage from "../components/SinglePage/SinglePage";

export const router = (loggedIn, LogInAction) => {
  return createBrowserRouter(
    [
      {
        path: "/", element: loggedIn ? (< Root loggedIn={loggedIn} />) : (<Navigate to="/login" />), errorElement: <ErrorPage />,
        children: 
        [
          {path: "/", element: <List /> },
          { path: "/employees", element: <List /> },
          { path: "/employees/:id", element: <SinglePage /> },
          { path: "/new", element: <Form /> },
        ],
      },
      {
        path: '/login', element: <Login LogInAction={LogInAction} />
      }
    ],
    {
      future: {
        v7_relativeSplatPath: true,
        v7_fetcherPersist: true,
        v7_normalizeFormMethod: true,
        v7_partialHydration: true,
        v7_skipActionErrorRevalidation: true,
      },
    }
  );
};