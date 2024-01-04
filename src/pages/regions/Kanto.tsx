import { useEffect } from "react"
import { usePokedexFetch } from "../../hooks/usePokedexFetch"

export default function Kanto() {

    let { getPokedexPokemon, pokemonData } = usePokedexFetch(151, 0)

    useEffect(() => {
        getPokedexPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
            <header className="App-header-grid">
                <h1>Kanto</h1>
                <img src="https://archives.bulbagarden.net/media/upload/thumb/2/25/LGPE_Kanto_Map.png/320px-LGPE_Kanto_Map.png" alt="map" />
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