import React from 'react'

const PokemonDetail = ({ name, image, type }) => {
    return (
        <div>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>Type: {type}</p>
        </div>
    )
}

export default PokemonDetail