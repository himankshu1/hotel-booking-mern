import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/sign-in",
        element: <h1>Login Page</h1>,
      },
      {
        path: "/register",
        element: <h1>Register</h1>,
      },
    ],
  },
]);
