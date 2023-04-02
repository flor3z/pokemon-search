import 'bulma/css/bulma.css';
import fetchPokemon from './api';
import PokeSearch from './components/PokeSearch';
import PokeDisplay from './components/PokeDisplay';
import Page404 from './components/Page404';
import BounceLoader from 'react-spinners/BounceLoader';
import React, { useState } from 'react';

const PokemonResult = ({ pokemon, error, loading }) => {
  if (loading) {
    return (
      <div className="loading">
        <BounceLoader color="#36d7b7" />
      </div>
    );
  }
  if (error) {
    return <Page404 />;
  } else {
    return <PokeDisplay pokemon={pokemon} />;
  }
};

function App() {
  const [pokemon, setPokemon] = useState(undefined);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const onHandleFormSubmit = async (searchTerm) => {
    setIsLoading(true);

    const result = await fetchPokemon(searchTerm);

    if (result.request.status === 404) {
      setError(true);
      setIsLoading(false);
    } else {
      setError(false);
      setPokemon(result.data);
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <PokeSearch onSubmit={onHandleFormSubmit} loading={loading} />
      <PokemonResult pokemon={pokemon} error={error} loading={loading} />
    </div>
  );
}

export default App;
