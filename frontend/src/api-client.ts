import { RegisterForm } from "./pages/RegisterPage";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const register = async (formData: RegisterForm) => {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/users/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const responseBody = await response.json();

    if (!response.ok) {
      throw new Error(responseBody.message);
    }
  } catch (error) {
    console.log(error);
  }
};
