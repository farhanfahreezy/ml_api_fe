import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/sign-in/SignIn";
import SignUp from "./pages/sign-up/SignUp";
import Predict from "./pages/(require-login)/predict/Predict";
import Train from "./pages/(require-login)/train/Train";
import Status from "./pages/(require-login)/status/Status";

export const router = () =>
  createBrowserRouter([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "",
          element: <Home />,
        },
        {
          path: "auth",
          element: <Outlet />,
          children: [
            {
              path: "sign-in",
              element: <SignIn />,
            },
            {
              path: "sign-up",
              element: <SignUp />,
            },
          ],
        },
        {
          path: "predict",
          element: <Predict />,
        },
        {
          path: "train",
          element: <Train />,
        },
        {
          path: "status",
          element: <Status />,
        },
      ],
    },
  ]);
