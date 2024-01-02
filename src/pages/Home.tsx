import { useEffect } from 'react';
import '../App.css';
import '../styles/Home.css'
import { useGetRandomPokemon } from '../hooks/useGetRandomPokemon';
import pokeball from '../images/pokeball.gif'
import Button from 'react-bootstrap/Button';
import Header from '../components/Header';

function App() {

  let { pokemon, getPokemon, type1, type2, loading } = useGetRandomPokemon()

  useEffect(() => {
    getPokemon()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <div className={pokemon?.name ? 'pokemon-box' : ''}>
          <h1 className='text-margin'>Random Pokemon</h1>
          {!loading && pokemon?.name && <h2>{pokemon.name}</h2>}
          {!loading && pokemon?.sprites && <img src={pokemon.sprites?.front_default} alt='pokemon' height={200} width={200}/>}
          {!loading && type1 && <img className='type-margin' src={`https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/go/${type1}.png`} alt='type badge'/>}
          {!loading && type2 && <img className='type-margin' src={`https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/go/${type2}.png`} alt='type badge'/>}
          {loading && <img src={pokeball} alt='pokeball' height={100} width={100}/>}
        </div>
        {!loading && <Button variant='danger' onClick={() => {getPokemon()}}>Get New Random Pokemon</Button>}
        <div>
          <h2 className='text-margin'>Curious to learn more about your fabourite Pokemon? Want to sharpen your Pokemon knowledge? This is the perfect place!</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
