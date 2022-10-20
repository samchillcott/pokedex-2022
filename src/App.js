import { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon')
      .then((response) => {
        setPokemon(response.data.results.map(p => p.name))
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div className="App">
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;
