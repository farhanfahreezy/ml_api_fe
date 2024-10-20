import { createBrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/home/Home";
import SignInPage from "./pages/sign-in/SignIn";
import SignUpPage from "./pages/sign-up/SignUp";
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
              element: <SignInPage />,
            },
            {
              path: "sign-up",
              element: <SignUpPage />,
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
