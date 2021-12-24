import axios from "axios";

const getCharacters = async (page, search) => {
  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${search}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};

export { getCharacters };
