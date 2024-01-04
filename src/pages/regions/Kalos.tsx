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
        <header className="App-header">
            <h1>Kalos</h1>
            <img src="https://archives.bulbagarden.net/media/upload/thumb/8/8a/Kalos_alt.png/320px-Kalos_alt.png" alt="map" />
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