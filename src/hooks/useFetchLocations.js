import axios from "axios";
import { useEffect, useState } from "react";
import { getLocations } from "../helpers/getLocations";

export const useFetchLocations = (id) => {
  const [state, setState] = useState({
    name: "",
    type: "",
    dimension: "",
    residentsURL: [],
    residents: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const handleResidentsURL = async (url) => {
      try {
        const { data } = await axios.get(url);
        return data;
      } catch (error) {
        console.error(error.message);
      }
    };

    const handleResidents = async (residentsURL) => {
      const data = await Promise.all(
        residentsURL.map((url) => handleResidentsURL(url))
      );
      return data;
    };

    const handleLocation = async () => {
      const {
        name,
        type,
        dimension,
        residents: residentsURL,
      } = await getLocations(id);
      const residents = await handleResidents(residentsURL);
      setState({
        name,
        type,
        dimension,
        residentsURL: residentsURL,
        residents: residents,
        loading: false,
        error: null,
      });
    };

    try {
      handleLocation();
    } catch (error) {
      console.error(error.message);
      setState((prevState) => ({
        ...prevState,
        error: error.message,
        loading: false,
      }));
    }
  }, [id]);

  return state;
};
