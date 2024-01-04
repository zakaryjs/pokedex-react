import { useEffect } from "react"
import { usePokedexFetch } from "../../hooks/usePokedexFetch"

export default function Kanto() {

    let { getPokedexPokemon, pokemonData } = usePokedexFetch(150, 0)

    useEffect(() => {
        getPokedexPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1>Kanto</h1>
                <img src="https://archives.bulbagarden.net/media/upload/thumb/2/25/LGPE_Kanto_Map.png/320px-LGPE_Kanto_Map.png" alt="map" />
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