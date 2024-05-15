import { createBrowserRouter } from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/sign-in",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
    ],
  },
]);
