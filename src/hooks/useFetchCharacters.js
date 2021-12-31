import { useEffect, useState } from "react";
import { getCharacters } from "../helpers/getCharacters";

export const useFetchCharacters = (pageNumber, search, filter) => {
  const [state, setState] = useState({
    info: {},
    characters: [],
    loading: true,
  });

  useEffect(() => {
    getCharacters(pageNumber, search, filter)
      .then((resp) => {
        setState({
          info: resp.info,
          characters: resp.results,
          loading: false,
        });
      })
      .catch((err) => {
        setState({
          info: {},
          characters: [],
          loading: true,
        });
        console.error(err.message);
      });
  }, [pageNumber, search, filter]);

  return state;
};
