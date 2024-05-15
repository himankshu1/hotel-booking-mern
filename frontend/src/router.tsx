import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import RegisterPage from "./pages/RegisterPage";

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
        element: <RegisterPage />,
      },
    ],
  },
]);
