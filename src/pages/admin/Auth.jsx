import React, { useState, useEffect } from "react";
import {
  login,
  logout,
  fetchAdminData,
  updateCsrfToken,
} from "../../utils/api"; // Import API functions
import useAxios from "../../hooks/useAxios";

const Auth = () => {
  // const { data, loading, error } = useAxios("/admin");
  // console.log(data);
  // console.log(error);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // Fetch CSRF token when the component loads
  useEffect(() => {
    updateCsrfToken();
  }, []);

  // Handle login event
  const handleLogin = async () => {
    const success = await login(username, password);
    if (success) {
      await fetchAdminData(); // Fetch data after login
    }
  };

  return (
    <div className="w-full h-[100dvh] bg-background text-white flex items-center justify-center">
      <div className=" w-[500px] flex flex-col border-2 border-primary rounded-tl-2xl rounded-br-2xl">
        <h2 className="text-3xl text-center p-4">ورود ادمین</h2>
        <input
          className="m-4 p-4 bg-neutral  rounded-tl-2xl rounded-br-2xl"
          type="text"
          placeholder="نام کاربری"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="m-4 p-4 bg-neutral  rounded-tl-2xl rounded-br-2xl"
          type="password"
          placeholder="رمز ورود"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className=" p-2 mb-8 mt-16 mx-auto w-[100px] border-2 border-primary rounded-tl-2xl rounded-br-2xl hover:bg-primary duration-500"
          onClick={handleLogin}
        >
          ورود
        </button>
        {/* <button onClick={logout}>Logout</button> */}
      </div>
    </div>
  );
};

export default Auth;
