import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Bookings from "pages/Bookings";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "bookings",
      element: <Bookings />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
