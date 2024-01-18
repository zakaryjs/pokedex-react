import { useParams } from "react-router-dom"
import { useFetchPokemon } from "../hooks/useFetchPokemon"
import { useEffect } from "react"
import { PokeAPI } from "pokeapi-types"
import { FaHeart } from "react-icons/fa";
import '../styles/Pokemon.css'
import pokeball from '../images/pokeball.gif'

export default function Pokemon() {

    let { pokemon, getPokemon, type1, type2, loading } = useFetchPokemon()
    let {name} = useParams() as { name: string }

    useEffect(() => {
        getPokemon(name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log(pokemon)
    }, [pokemon])

    const saveToFavourites = (pokemon: PokeAPI.Pokemon) => {
        let favouriteArray = JSON.parse(localStorage.getItem('favourites') || '[]')

        let obj = {
            name: pokemon.name,
            sprites: {
                front_default: pokemon?.sprites?.front_default
            }
        }

        if (!favouriteArray.some((favourite: PokeAPI.Pokemon) => favourite.name === obj.name)) {
            favouriteArray.push(obj)
        }

        localStorage.setItem('favourites', JSON.stringify(favouriteArray))
    }

    return (
        <div className="App">
            <header className="App-header">
                {loading && <img src={pokeball} alt='pokeball' height={100} width={100}/>}
                {!loading && <h1>#{pokemon?.id}</h1>}
                {!loading && <h1>{pokemon?.name}</h1>}
                {!loading && <FaHeart className="favourite" onClick={() => {saveToFavourites(pokemon!)}}/>}
                {!loading && <img src={pokemon?.sprites?.front_default} alt='pokemon' height={200} width={200}/>}
                {type1 && !loading && <img className='type-margin' src={`https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/go/${type1}.png`} alt='type badge'/>}
                {type2 && !loading && <img className='type-margin' src={`https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/go/${type2}.png`} alt='type badge'/>}
                {!loading && <h2><b><u>Abilities</u></b></h2>}
                {!loading && <h3>{pokemon?.abilities[0].ability.name}</h3>}
                {!loading && <h3>{pokemon?.abilities[1]?.ability.name}</h3>}
                {!loading && <h2><b><u>Base Stats</u></b></h2>}
                {!loading && <div key={pokemon?.name}>
                {pokemon?.stats.map(stat => (
                    <h2>{stat.stat.name}: {stat.base_stat}</h2>
                ))}
                </div>}
            </header>
        </div>
    )
}