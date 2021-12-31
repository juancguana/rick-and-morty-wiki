import axios from "axios";

export const getCharacters = async (page, search, filter) => {
  const { gender, species, status } = filter;

  const filters = `gender=${gender}&species=${species}&status=${status}`;

  const url = `https://rickandmortyapi.com/api/character?page=${page}&name=${search}&${filters}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
