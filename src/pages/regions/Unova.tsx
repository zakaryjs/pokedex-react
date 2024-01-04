import { useEffect } from "react"
import { usePokedexFetch } from "../../hooks/usePokedexFetch"

export default function Unova() {

    let { getPokedexPokemon, pokemonData } = usePokedexFetch(156, 493)

    useEffect(() => {
        getPokedexPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
        <header className="App-header-grid">
            <h1>Unova</h1>
            <img src="https://archives.bulbagarden.net/media/upload/thumb/f/fc/Unova_B2W2_alt.png/320px-Unova_B2W2_alt.png" alt="map" />
            <div className="pokemon-grid margin-top">
            {pokemonData?.map(pokemon => (
                <div className="poke">
                    <h4>{pokemon.name}</h4>
                    <img src={pokemon.image} alt="pokemon" />
                </div>
            ))}
        </div>
        </header>
</div>
    )
}