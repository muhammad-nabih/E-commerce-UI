import { useEffect, useState } from "react";
import { fetchApi } from "../fetchApi/fetchApi";

export const useFetch = (endPoint) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await fetchApi.get(endPoint);
        setData(res.data.data);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [endPoint]);

  return { data, loading, error };
};
