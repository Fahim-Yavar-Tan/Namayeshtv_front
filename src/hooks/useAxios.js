import { useState, useEffect } from "react";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL, // Set your base URL here
});
console.log();

const useAxios = (endpoint, method = "GET", options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axiosInstance({
          url: endpoint,
          method,
          ...options,
        });
        setData(response.data);
        setError(null);
      } catch (err) {
        setError(err);
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [endpoint, method]);

  return { data, loading, error };
};

export default useAxios;
