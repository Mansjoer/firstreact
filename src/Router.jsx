import { createBrowserRouter } from "react-router-dom";
import Home from "./Pages/Home";
import Login from "./Pages/Auth/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
