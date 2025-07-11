import axios from "axios";
import { BASE_API_URL } from "../utils/constants"; // ✅ Import this

const api = axios.create({
  baseURL: BASE_API_URL, // ✅ Use the dynamic URL
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});
// Helper to extract error message
const getErrorMessage = (error) => {
  if (error.response) {
    // Server responded with a status code outside 2xx
    return (
      error.response.data?.message ||
      error.response.data?.error ||
      `Request failed with status ${error.response.status}`
    );
  } else if (error.request) {
    // Request made but no response received
    return "No response from server. Please check your network connection.";
  } else {
    // Something happened in setting up the request
    return error.message || "An unexpected error occurred";
  }
};

// Register user
export const register = async (userData) => {
  try {
    const response = await api.post("/register", JSON.stringify(userData), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    const message = getErrorMessage(error);
    console.error("Registration Error Details:", {
      request: error.config,
      response: error.response,
      message,
    });
    throw message;
  }
};

// Login user
export const login = async (credentials) => {
  try {
    const response = await api.post("/login", JSON.stringify(credentials), {
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    const message = getErrorMessage(error);
    console.error("Login Error Details:", {
      request: error.config,
      response: error.response,
      message,
    });
    throw message;
  }
};

// ... getCurrentUser remains the same ...

// Get current user
export const getCurrentUser = async (token) => {
  try {
    const response = await api.get("/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    const message = getErrorMessage(error);
    console.error("Get User Error:", error);
    throw message;
  }
};

export default { register, login, getCurrentUser };
