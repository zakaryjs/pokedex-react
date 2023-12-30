import { useEffect, useState } from "react";
import { PokeAPI } from "pokeapi-types"

export function useGetRandomPokemon() {

    const [pokemon, setPokemon] = useState<PokeAPI.Pokemon>()
    const [type1, setType1] = useState<String>()
    const [type2, setType2] = useState<String>()
    const [loading, setLoading] = useState<boolean>(true)

    function generateNumber() {
        return Math.floor(Math.random() * 1010) + 1
    }

    async function getPokemon(pokemonId = generateNumber()) {
        setLoading(true)
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
        let data = await response.json()
        setPokemon(data)
        setLoading(false)
    }

    useEffect(() => {
        if (pokemon?.types[0]?.type?.name) {
            setType1(pokemon?.types[0].type.name)
        }
        if (pokemon?.types[1]?.type?.name) {
            setType2(pokemon?.types[1].type.name)
        }
        if (!pokemon?.types[1]?.type?.name) {
            setType2(undefined)
        }
      // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [pokemon])

    return { pokemon, getPokemon, type1, type2, loading }
}