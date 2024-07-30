import { API_BASE_URL } from "../config/config";
import Cookies from 'js-cookie';

export const login = async (email, password) => {
  const response = await fetch(`${API_BASE_URL}/api/users/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong!");
  }

  const data = await response.json();

  // Save token and user information in cookies using js-cookie
  Cookies.set('token', data.token, { expires: 1, path: '/', sameSite: 'Lax' });
  Cookies.set('user', JSON.stringify(data.user), { expires: 1, path: '/', sameSite: 'Lax' });

  return data.token;
};

export const fetchUserProfile = async (token) => {
  const response = await fetch(`${API_BASE_URL}/api/users/profile`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}` 
    },
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.message || "Something went wrong!");
  }

  const user = await response.json();
  Cookies.set('user', JSON.stringify(user), { expires: 1, path: '/', sameSite: 'Lax' });
  return user;
};
