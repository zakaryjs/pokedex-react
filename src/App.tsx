import { useEffect } from 'react';
import './App.css';
import { useGetRandomPokemon } from './hooks/useGetRandomPokemon';

function App() {

  let { pokemon, getPokemon } = useGetRandomPokemon()

  useEffect(() => {
    getPokemon()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    console.log(pokemon)
  }, [pokemon])

  return (
    <div className="App">
      <header className="App-header">
        <h1>Pokedex</h1>
        <div className='pokemon-box'>
          {pokemon.name && <h1>{pokemon.name}</h1>}
          {pokemon.sprites && <img src={pokemon.sprites?.other?.home?.front_default} alt='pokemon' height={200} width={200}/>}
        </div>
      </header>
    </div>
  );
}

export default App;
