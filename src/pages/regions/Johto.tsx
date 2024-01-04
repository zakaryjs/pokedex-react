import { useEffect } from "react"
import { usePokedexFetch } from "../../hooks/usePokedexFetch"

export default function Johto() {

    let { getPokedexPokemon, pokemonData } = usePokedexFetch(100, 151)

    useEffect(() => {
        getPokedexPokemon()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1>Johto</h1>
                <img src="https://archives.bulbagarden.net/media/upload/thumb/6/64/JohtoMap.png/320px-JohtoMap.png" alt="map" />
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