import axios from 'axios';

const fetchPokemon = async (searchTerm) => {
  const response = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)

    .catch((err) => {
      return err;
    });
  return response;
};

export default fetchPokemon;
