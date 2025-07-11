// utils/constants.js
export const BASE_API_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:5000/api/auth"
    : "https://trackruit.onrender.com/api/auth";