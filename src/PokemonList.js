import React from 'react'
import PokemonDetail from './PokemonDetail'

const PokemonList = ({ allPokemon }) => {
    console.log(allPokemon);
    return (
        <div>
            { allPokemon.map(pokemon => (
                <div>
                    <PokemonDetail
                        key={ pokemon.name}
                        name={ pokemon.name}
                        // image={ pokemon.sprites[4] }
                        // type={ pokemon.types[0].type.name }
                    />
                </div>
            )) }
        </div>
    )
}

export default PokemonList