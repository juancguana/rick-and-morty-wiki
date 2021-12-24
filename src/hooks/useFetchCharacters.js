import { useEffect, useState } from "react";
import { getCharacters } from "../helpers/getCharacters";

const useFetchCharacters = (pageNumber, search) => {
  const [state, setState] = useState({
    info: {},
    characters: [],
    loading: true,
  });
  const { characters } = state;

  useEffect(() => {
    getCharacters(pageNumber, search)
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
  }, [pageNumber, search]);

  return { characters };
};

export { useFetchCharacters };
