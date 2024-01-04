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
        <header className="App-header">
            <h1>Galar</h1>
            <img src="https://archives.bulbagarden.net/media/upload/thumb/c/ce/Galar_artwork.png/424px-Galar_artwork.png" alt="map" />
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