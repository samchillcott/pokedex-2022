import React from 'react'

const PokemonList = ({ pokemon }) => {
    return (
        <div>
            { pokemon.map(p => (
                <div>{ p }</div>
            )) }
        </div>
    )
}

export default PokemonList