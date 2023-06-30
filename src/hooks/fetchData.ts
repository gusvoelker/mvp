import { useState, useEffect } from "react";
import axios from "axios";

interface queryParams {
  params: {
    id?: string;
  };
}

export const useFetchData = (url: string, params: queryParams | null) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url, params);
        const { data } = await response;
        setData(data);
        setLoading(false);
      } catch (error) {
        //TODO: implement error handling if wanted
        console.log(error);
        // setError(error);
        // setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};
