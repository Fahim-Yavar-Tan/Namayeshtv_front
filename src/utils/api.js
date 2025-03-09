// utils/api.js

export const API_BASE_URL = process.env.REACT_APP_BASE_URL; // Change this to your backend URL

/**
 * Extracts the CSRF token from cookies.
 */
export const getCsrfToken = () => {
  return document.cookie
    .split("; ")
    .find((row) => row.startsWith("csrftoken="))
    ?.split("=")[1];
};

/**
 * Updates CSRF token from Django server and stores it in cookies.
 */
export const updateCsrfToken = async () => {
  const response = await fetch(`${API_BASE_URL}admin/`, {
    method: "GET",
    credentials: "include", // Important for session authentication
  });

  const newCsrfToken = response.headers.get("X-CSRFToken");
  if (newCsrfToken) {
    document.cookie = `csrftoken=${newCsrfToken}; path=/`;
  }
  console.log(newCsrfToken);
};

/**
 * Wrapper function for making authenticated requests with CSRF token.
 */
export const fetchWithCsrf = async (url, options = {}) => {
  const csrfToken = getCsrfToken();

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    credentials: "include", // Ensures session authentication
    headers: {
      ...options.headers,
      "X-CSRFToken": csrfToken,
    },
  });

  // Update CSRF token if Django issues a new one
  const newCsrfToken = response.headers.get("X-CSRFToken");
  if (newCsrfToken) {
    document.cookie = `csrftoken=${newCsrfToken}; path=/`;
  }

  return response;
};

/**
 * Logs in the user by sending credentials to Django's admin login.
 */
export const login = async (username, password) => {
  const response = await fetchWithCsrf("/admin/login/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ username, password }).toString(),
  });

  if (response.ok) {
    console.log("Login successful!");
    return true;
  } else {
    console.error("Login failed");
    return false;
  }
};

/**
 * Fetches admin panel data after login.
 */
export const fetchAdminData = async () => {
  const response = await fetchWithCsrf("/admin/", { method: "GET" });

  if (response.ok) {
    const data = await response.json();
    console.log("Admin Data:", data);
    return data;
  } else {
    console.error("Failed to fetch admin data");
    return null;
  }
};

/**
 * Logs out the user from Django's admin panel.
 */
export const logout = async () => {
  await fetchWithCsrf("/admin/logout/", { method: "POST" });
  console.log("Logged out!");
};
