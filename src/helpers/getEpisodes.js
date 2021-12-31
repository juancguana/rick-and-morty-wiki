import axios from "axios";

export const getEpisodes = async (id) => {
  const url = `https://rickandmortyapi.com/api/episode/${id}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
