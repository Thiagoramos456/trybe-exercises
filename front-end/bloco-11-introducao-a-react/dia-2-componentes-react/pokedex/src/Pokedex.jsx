import React from 'react';
import Pokemon from './Pokemon.jsx';
import pokemons from './data.js';

class Pokedex  extends React.Component {
    render() { 
        return (
        <div className="pokedex">
            {pokemons.map((poke) => {
            return <Pokemon className='pokemon' key={poke.id} pokemon={poke}/>;
            })}
        </div>
        )
    }
}
 
export default Pokedex;