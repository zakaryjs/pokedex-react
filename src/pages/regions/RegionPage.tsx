import { useEffect } from "react"
import { usePokedexFetch } from "../../hooks/usePokedexFetch"

interface region {
    limit: number,
    offset: number,
    name: string,
    link: string
}

export default function RegionPage(props: region) {

    let { getPokedexPokemon, pokemonData } = usePokedexFetch(props.limit, props.offset)

    useEffect(() => {
        console.log(props)
        getPokedexPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
            <header className="App-header-grid">
                <h1>{props.name}</h1>
                <img src={props.link} alt="map" />
                <div className="pokemon-grid margin-top">
                {pokemonData?.map(pokemon => (
                    <div key={pokemon.name} className="poke">
                        <h4>{pokemon.name}</h4>
                        <img src={pokemon.image} className="button-margin" alt="pokemon" />
                    </div>
                ))}
            </div>
            </header>
    </div>
    )
}