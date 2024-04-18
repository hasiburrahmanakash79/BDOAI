import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/HomePage/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);

export default router;
