import { PokeAPI } from "pokeapi-types"
import { useEffect, useState } from "react"


export function useFetchPokemon () {

    const [pokemon, setPokemon] = useState<PokeAPI.Pokemon>()
    const [type1, setType1] = useState<String>()
    const [type2, setType2] = useState<String>()

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

    async function getPokemon(name: string) {
        let lowerName: string = name.toLowerCase()
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + lowerName)
        let data = await response.json()
        setPokemon(data)
    }

    return { pokemon, getPokemon, type1, type2 }

}