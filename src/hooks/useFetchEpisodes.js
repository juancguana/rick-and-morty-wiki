import axios from "axios";
import { useEffect, useState } from "react";
import { getEpisodes } from "../helpers/getEpisodes";

export const useFetchEpisodes = (id) => {
  const [state, setState] = useState({
    name: "",
    airDate: "",
    charactersURL: [],
    characters: [],
    loading: true,
    error: null,
  });

  useEffect(() => {
    const handleCharactersURL = async (url) => {
      try {
        const { data } = await axios.get(url);
        return data;
      } catch (error) {
        console.error(error.message);
      }
    };

    const handleCharacters = async (charactersURL) => {
      const data = await Promise.all(
        charactersURL.map((url) => handleCharactersURL(url))
      );
      return data;
    };

    const handleEpisode = async () => {
      const {
        name,
        air_date: airDate,
        characters: charactersURL,
      } = await getEpisodes(id);
      const characters = await handleCharacters(charactersURL);
      setState({
        name,
        airDate,
        charactersURL,
        characters,
        loading: false,
        error: null,
      });
    };

    try {
      handleEpisode();
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
