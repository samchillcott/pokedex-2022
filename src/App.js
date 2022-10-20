import { useState } from 'react';
import './App.css';
import PokemonList from './PokemonList';

function App() {
  const [pokemon, setPokemon] = useState(['Aggron', 'Aipom'])
  return (
    <div className="App">
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;
