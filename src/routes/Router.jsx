import { createBrowserRouter } from "react-router-dom";
import Common from "../SharedLayOut/Common";
import Home from "../pages/Home";
import Details from "../pages/Details";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Common />,
      children: [
        {
            path: "/",
            element: <Home />,
        },
        {
          path: "/details/:id",
          element: <Details />,
      }
      ]
    },
  ]);