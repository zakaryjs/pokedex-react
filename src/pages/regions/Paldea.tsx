import { useEffect } from "react"
import { usePokedexFetch } from "../../hooks/usePokedexFetch"

export default function Paldea() {

    let { getPokedexPokemon, pokemonData } = usePokedexFetch(120, 905)

    useEffect(() => {
        getPokedexPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
            <header className="App-header-grid">
            <h1>Paldea</h1>
            <img src="https://archives.bulbagarden.net/media/upload/thumb/f/fd/Paldea_artwork.png/320px-Paldea_artwork.png" alt="map" />
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