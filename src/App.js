import { useState, useEffect } from 'react';
import './App.css';
import PokemonList from './PokemonList';
import axios from 'axios'

function App() {
  const [allPokemon, setAllPokemon] = useState([])
  const [loading, setLoading] = useState(true)

  const getAllPokemon = async () => {
    setLoading(true)
    const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=100&offset=0')
    setLoading(false)
    setAllPokemon(response.data.results)
   }

  useEffect(() => {
    getAllPokemon()
  }, [])

  if (loading) return "Loading results.."

  return (
    <div className="App">
      <h1>Pokedex</h1>
      <PokemonList allPokemon={ allPokemon } />
    </div>
  );
}

export default App;
