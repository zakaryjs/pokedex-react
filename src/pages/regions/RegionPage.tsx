import { useEffect } from "react"
import { usePokedexFetch } from "../../hooks/usePokedexFetch"
import pokeball from '../../images/pokeball.gif'
import { useNavigate } from "react-router-dom"

interface region {
    limit: number,
    offset: number,
    name: string,
    link: string
}

export default function RegionPage(props: region) {

    let { getPokedexPokemon, pokemonData, loading } = usePokedexFetch(props.limit, props.offset)
    const navigate = useNavigate()

    useEffect(() => {
        getPokedexPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
            <header className="App-header-grid">
                {loading && <img src={pokeball} alt='pokeball' height={100} width={100}/>}
                {!loading && <h1>{props.name}</h1>}
                {!loading && <img src={props.link} alt="map" />}
                <div className="pokemon-grid margin-top">
                {pokemonData?.map(pokemon => (
                    <div onClick={() => {navigate(`/pokemon/${pokemon.name}`)}} key={pokemon.name} className="poke">
                        <h4>{pokemon.name}</h4>
                        <img src={pokemon.image} className="button-margin" alt="pokemon" />
                    </div>
                ))}
            </div>
            </header>
    </div>
    )
}