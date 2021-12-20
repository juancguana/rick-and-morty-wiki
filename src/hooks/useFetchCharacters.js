import { useEffect, useState } from "react";
import { getCharacters } from "../helpers/getCharacters";

const useFetchCharacters = (pageNumber) => {
  const [state, setState] = useState({
    info: {},
    characters: [],
    loading: true,
  });
  const { characters } = state;

  useEffect(() => {
    getCharacters(pageNumber)
      .then((resp) => {
        setState({
          info: resp.info,
          characters: resp.results,
          loading: false,
        });
      })
      .catch((err) => console.error(err.message));
  }, [pageNumber]);

  return { characters };
};

export { useFetchCharacters };
