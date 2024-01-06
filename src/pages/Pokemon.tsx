import { useParams } from "react-router-dom"
import { useFetchPokemon } from "../hooks/useFetchPokemon"
import { useEffect } from "react"
import { PokeAPI } from "pokeapi-types"
import { FaHeart } from "react-icons/fa";
import '../styles/Pokemon.css'

export default function Pokemon() {

    let { pokemon, getPokemon, type1, type2 } = useFetchPokemon()
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
                <h1>#{pokemon?.id}</h1>
                <h1>{pokemon?.name}</h1>
                <FaHeart className="favourite" onClick={() => {saveToFavourites(pokemon!)}}/>
                <img src={pokemon?.sprites?.front_default} alt='pokemon' height={200} width={200}/>
                {type1 && <img className='type-margin' src={`https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/go/${type1}.png`} alt='type badge'/>}
                {type2 && <img className='type-margin' src={`https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/go/${type2}.png`} alt='type badge'/>}
                <h2><b><u>Abilities</u></b></h2>
                <h3>{pokemon?.abilities[0].ability.name}</h3>
                <h3>{pokemon?.abilities[1]?.ability.name}</h3>
                <h2><b><u>Base Stats</u></b></h2>
                <div key={pokemon?.name}>
                {pokemon?.stats.map(stat => (
                    <h2>{stat.stat.name}: {stat.base_stat}</h2>
                ))}
                </div>
            </header>
        </div>
    )
}