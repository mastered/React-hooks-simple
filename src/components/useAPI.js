import { useState, useEffect } from "react";
import Axios from "axios";

const useAPI = ApiResource => {
  const [response, setResponse] = useState([]);

  useEffect(() => {
    (async response => {
      try {
        const baseAPIUrl = "https://jsonplaceholder.typicode.com/";
        const result = await Axios.get(
          baseAPIUrl + ApiResource
        );
        setResponse(result.data);
      } catch (err) {
        console.log(err.response);
      }
    })(ApiResource);
  }, [ApiResource]);

  return response;
};

export default useAPI;
