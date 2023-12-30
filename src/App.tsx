import { useEffect } from 'react';
import './App.css';
import { useGetRandomPokemon } from './hooks/useGetRandomPokemon';
import pokeball from './images/pokeball.gif'
import Button from 'react-bootstrap/Button';

function App() {

  let { pokemon, getPokemon, type1, type2, loading } = useGetRandomPokemon()

  useEffect(() => {
    getPokemon()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1 id='header-text'>Pokedex</h1>
        <div className={pokemon?.name ? 'pokemon-box' : ''}>
          {!loading && pokemon?.name && <h1>{pokemon.name}</h1>}
          {!loading && pokemon?.sprites && <img src={pokemon.sprites?.front_default} alt='pokemon' height={200} width={200}/>}
          {!loading && type1 && <img src={`https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/go/${type1}.png`} alt='type badge'/>}
          {!loading && type2 && <img src={`https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/go/${type2}.png`} alt='type badge'/>}
        </div>
        {loading && <img src={pokeball} alt='pokeball' height={100} width={100}/>}
        {!loading && <Button variant='danger' onClick={() => {getPokemon()}}>Get New Random Pokemon</Button>}
        <div className='pokemon-box'>
          <h2>Curious to learn more about your fabourite Pokemon? Want to sharpen your Pokemon knowledge? This is the perfect place!</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
