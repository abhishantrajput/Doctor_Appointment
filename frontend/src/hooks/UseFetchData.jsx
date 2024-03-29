import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import React from "react";
import { token } from "../config.js";
const UseFetchData = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetch(url, {
          headers: {
            Authorization: `Bearer ${token}`,
            
          },
        });

        const result = await res.json();
        if (!res.ok) {
          throw new Error(result.message + "😔");
        }

        setData(result.data);
        setLoading(false);
        toast.success(result.message);
      } catch (error) {
        setLoading(false);
        setError(error.message);
      }
    };

    fetchData(); // Call the fetchData function
  }, []);

  return { data, error, loading };
};

export default UseFetchData;
