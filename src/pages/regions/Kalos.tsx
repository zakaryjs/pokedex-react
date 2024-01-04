import { useEffect } from "react"
import { usePokedexFetch } from "../../hooks/usePokedexFetch"

export default function Kalos() {

    let { getPokedexPokemon, pokemonData } = usePokedexFetch(72, 649)

    useEffect(() => {
        getPokedexPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
            <header className="App-header-grid">
                <h1>Kalos</h1>
                <img src="https://archives.bulbagarden.net/media/upload/thumb/8/8a/Kalos_alt.png/320px-Kalos_alt.png" alt="map" />
                <div className="pokemon-grid margin-top">
                {pokemonData?.map(pokemon => (
                    <div className="poke">
                        <h4>{pokemon.name}</h4>
                        <img src={pokemon.image} className="button-margin" alt="pokemon" />
                    </div>
                ))}
            </div>
            </header>
    </div>
    )
}