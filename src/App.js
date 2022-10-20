import { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
      .then((response) => {
        setLoading(false)
        setPokemon(response.data.results.map(p => p.name))
      })
      .catch((error) => console.log(error))
  }, [])

  if (loading) return "Loading results.."

  return (
    <div className="App">
      <PokemonList pokemon={pokemon} />
    </div>
  );
}

export default App;
