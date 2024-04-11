import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url, q) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        const {data} = await axios.get(`${url}/${q}`);
        setData(data)
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return [data, error, loading];
}
