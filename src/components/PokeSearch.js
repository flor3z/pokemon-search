import React, { useState } from 'react';

function PokeSearch({ onSubmit, loading }) {
  const [searchTerm, setSearchTerm] = useState('');

  const onHandleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const onHandleSubmit = (event) => {
    event.preventDefault();
    onSubmit(searchTerm.toLowerCase());
    setSearchTerm('');
  };

  return (
    <div className="search-container">
      <h1 className="title is-1">Search a Pokémon!</h1>
      <form onSubmit={onHandleSubmit} className="box search-box">
        <label className="label">Enter Search</label>
        <div
          className={
            loading ? 'control is-large is-loading' : 'control is-large'
          }
        >
          <input
            onChange={onHandleChange}
            className="input is-medium"
            value={searchTerm}
            type="text"
            placeholder="Medium input"
          />
          <button className="button is-medium is-responsive is-link">
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default PokeSearch;
