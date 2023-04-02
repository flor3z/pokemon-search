import axios from 'axios';

const fetchPokemon = async (searchTerm) => {
  const response = await axios
    .get(`https://pokeapi.co/api/v2/pokemon/${searchTerm}`)

    .catch((err) => {
      return err;
    });
  return response;
};

// .then((res) => {
//   return res.data;
// })

export default fetchPokemon;
