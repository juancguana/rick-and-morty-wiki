import axios from "axios";

export const getLocations = async (id) => {
  const url = `https://rickandmortyapi.com/api/location/${id}`;

  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error) {
    console.error(error.message);
  }
};
