import axios from "axios";

const getCharacters = async (page) => {
  const url = `https://rickandmortyapi.com/api/character?page=${page}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export { getCharacters };
