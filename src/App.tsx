import React, { FunctionComponent, useEffect, useState} from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';
  
const App: FunctionComponent = () => {
 
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    
    useEffect(() => {
        setPokemons(POKEMONS);

    }, [])
     

    return (
        <div>
            <h1>Pokédex</h1>
            <ul>
                {pokemons.map(({id, name, picture, created, types}) => (
                    <div key={name}>
                        <div>{name}</div>
                        <div>{id}</div>
                        <img src={picture} alt={name}/>
                        <div>{types}</div>
                    </div>
                ))}
            </ul>
        </div>
    );
}
  
export default App;
