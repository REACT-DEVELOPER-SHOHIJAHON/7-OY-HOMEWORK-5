import React from "react";
import { useRoutes, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import Login from "./Login";
import Profile from "./Profile";
import Home from "./Home";
import Navbar from "./Navbar";

const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

const RouterController = () => {
  const location = useLocation();
  const token = useSelector((state) => state?.auth?.token);
  const shouldShowNavbar = location.pathname !== "/login";

  const routing = useRoutes(routes);

  return (
    <>
      {shouldShowNavbar && <Navbar />}
      {routing}
    </>
  );
};

export default RouterController;
