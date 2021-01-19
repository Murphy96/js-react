import React, { useState } from 'react';

import { useTestDispatch, useTestState } from '../../hooks/test';

import './styles.scss';

export const Test = () => {

  const [pokemonName, setPokemonName] = useState('');
  const { loadPokemon } = useTestDispatch();
  const test = useTestState();

  const pokemon = test[pokemonName];

  return (
    <div className="layout">
      <div className="title">TEST</div>
      <div className="input">
        <input value={pokemonName} onChange={(event) => setPokemonName(event.target.value)}/>
      </div>
      <div className="button">
        <button onClick={loadPokemon(pokemonName)}>GET POKEMON</button>
      </div>
      <div className="stats">
        {pokemon?.stats?.map(((stat, index) => (
          <div className="stat" key={stat.stat.name + '_' + index}>
            <div className="name">{stat.stat.name}</div> : <div>{stat.base_stat}</div>
          </div>
        )))}
      </div>
    </div>
  );
}
