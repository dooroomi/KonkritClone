import { useState, useEffect } from "react";
import axios from "axios";

function useData(initialState, endpoint) {
  const [data, setCollections] = useState(initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      setIsError(false);
      try {
        const results = await axios(endpoint);
        setCollections(results.data);
        setIsLoading(false);
      } catch {
        setIsError(true);
        setIsLoading(false);
      }
    }
    fetchData();
  }, [endpoint]);

  return { data, isLoading, isError }; // {data:data, isLoading:isLoading, isError:isError}
}

export default useData;
