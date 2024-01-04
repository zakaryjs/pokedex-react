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
        <header className="App-header">
            <h1>Sinnoh</h1>
            <img src="https://archives.bulbagarden.net/media/upload/thumb/0/08/Sinnoh_BDSP_artwork.png/320px-Sinnoh_BDSP_artwork.png" alt="map" />
        </header>
        <div>
            {pokemonData?.map(pokemon => (
                <div>
                    <h1>{pokemon.name}</h1>
                    <img src={pokemon.image} alt="pokemon" />
                </div>
            ))}
        </div>
</div>
    )
}