import { useEffect } from "react"
import { usePokedexFetch } from "../../hooks/usePokedexFetch"

export default function Galar() {

    let { getPokedexPokemon, pokemonData } = usePokedexFetch(96, 809)

    useEffect(() => {
        getPokedexPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
            <header className="App-header-grid">
                <h1>Galar</h1>
                <img src="https://archives.bulbagarden.net/media/upload/thumb/c/ce/Galar_artwork.png/170px-Galar_artwork.png" alt="map" />
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