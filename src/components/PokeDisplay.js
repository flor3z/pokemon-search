import React from 'react';

function PokeDisplay({ pokemon }) {
  const objColours = {
    normal: '#a8a878ff',
    fire: '#f08030',
    water: '#6890f0ff',
    electric: '#d8b52cff',
    grass: '#78c850ff',
    bug: '#a8b820ff',
    flying: '#a890f0ff',
    fighting: '#c03028ff',
    ice: '#98d8d8ff',
    rock: '#b8a038ff',
    ground: '#e0c068ff',
    poison: '#a040a0ff',
    psychic: '#f85888ff',
    ghost: '#705898ff',
    dragon: '#7038f8ff',
    dark: '#705848ff',
    steel: '#b8b8d0ff',
    fairy: '#f0b6bcff',
  };

  if (pokemon === undefined) {
    return null;
  }
  return (
    <div className="card-container">
      <div className="card">
        <div className="image-type-container">
          <div className="pokemon-container">
            <p className="title is-1 is-centered">
              {pokemon.name.toUpperCase()}
            </p>

            <div className="poke-image">
              <div className="card-image">
                <figure className="image is-3by3">
                  <img
                    className="poke-image"
                    src={
                      pokemon.sprites.other['official-artwork'].front_default
                    }
                    alt="pokemon"
                  />
                </figure>
              </div>
            </div>
          </div>

          <div className="card-content">
            <p className="subtitle is-3">Type</p>
            <div className="media-content">
              {pokemon.types.map((item) => {
                return (
                  <p
                    key={item.type.name}
                    className="type-text"
                    style={{
                      backgroundColor: `${objColours[item.type.name]}`,
                    }}
                  >
                    {item.type.name.toUpperCase()}
                  </p>
                );
              })}
            </div>
            <br />
            <p className="subtitle is-3">Base Stats</p>
            <div className="stat-content">
              {pokemon.stats.map((item) => {
                return (
                  <div key={item.stat.name} className="stat-container">
                    <p className="subtitle">
                      {item.stat.name.toUpperCase()} : {item.base_stat}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="content">
          <div
            className="move-list"
            style={{ borderColor: `${objColours[pokemon.types[0].type.name]}` }}
          >
            {pokemon.moves.map((item) => {
              return (
                <li className="moves" key={item.move.name}>
                  {item.move.name}
                </li>
              );
            })}
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}

export default PokeDisplay;
