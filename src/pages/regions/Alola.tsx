import { useEffect } from "react"
import { usePokedexFetch } from "../../hooks/usePokedexFetch"

export default function Alola() {

    let { getPokedexPokemon, pokemonData } = usePokedexFetch(88, 721)

    useEffect(() => {
        getPokedexPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
        <header className="App-header">
            <h1>Alola</h1>
            <img src="https://archives.bulbagarden.net/media/upload/thumb/0/0b/Alola_USUM_artwork.png/320px-Alola_USUM_artwork.png" alt="map" />
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