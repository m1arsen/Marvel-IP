import { useState, useCallback } from "react";

export const useHttp = () => {
  const [marvelProcess, setMarvelProcess] = useState('waiting');

  const request = useCallback(async (url, method = 'GET', body = null, headers = {'Content-Type': 'application/json'}) => {

    setMarvelProcess('loading');

    try {
      const response = await fetch(url, {method, body, headers});

      if(!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const data = await response.json();

      return data;
    } catch(e) {
      setMarvelProcess('error');
      throw e;
    }

  }, [])

  const clearError = useCallback(() => {
    setMarvelProcess('loading');
  }, []);

  return {request,
          clearError,
          marvelProcess,
          setMarvelProcess}
}