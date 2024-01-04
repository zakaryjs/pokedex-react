import { useEffect } from "react"
import { usePokedexFetch } from "../../hooks/usePokedexFetch"

export default function Sinnoh() {

    let { getPokedexPokemon, pokemonData } = usePokedexFetch(107, 386)

    useEffect(() => {
        getPokedexPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
        <header className="App-header-grid">
            <h1>Sinnoh</h1>
            <img src="https://archives.bulbagarden.net/media/upload/thumb/0/08/Sinnoh_BDSP_artwork.png/320px-Sinnoh_BDSP_artwork.png" alt="map" />
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