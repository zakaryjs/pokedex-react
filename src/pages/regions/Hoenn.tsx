import { useEffect } from "react"
import { usePokedexFetch } from "../../hooks/usePokedexFetch"

export default function Hoenn() {

    let { getPokedexPokemon, pokemonData } = usePokedexFetch(135, 251)

    useEffect(() => {
        getPokedexPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
        <header className="App-header">
            <h1>Hoenn</h1>
            <img src="https://archives.bulbagarden.net/media/upload/thumb/8/85/Hoenn_ORAS.png/320px-Hoenn_ORAS.png" alt="map" />
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