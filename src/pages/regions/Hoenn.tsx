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
        <header className="App-header-grid">
            <h1>Hoenn</h1>
            <img src="https://archives.bulbagarden.net/media/upload/thumb/8/85/Hoenn_ORAS.png/320px-Hoenn_ORAS.png" alt="map" />
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