import { useEffect, useState } from "react";

interface Pokemon {
    name: string,
    url: string
}

interface pokemonResponse {
    results: Pokemon[]
}

interface singlePokemonData {
    name: string,
    image: string
}

export function usePokedexFetch(limit: number, offset: number) {

    const [pokemon, setPokemon] = useState<pokemonResponse>()
    const [pokemonData, setPokemonData] = useState<singlePokemonData[]>([])

    async function getPokedexPokemon() {
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}&offset=${offset}`)
        let data = await response.json()
        setPokemon(data)
    }

    async function fetchIndividualPokemonData () {
        let all: singlePokemonData[] = []
        if (pokemon?.results[0]) {
            for (let i = 0; i < pokemon.results.length; i++) {
                let pokeDetails = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon.results[i].name)
                let response = await pokeDetails.json()
                let obj = {
                    name: response.name,
                    image: response.sprites["front_default"]
                }
                all.push(obj)
            }
            setPokemonData(all)
        }
    } 

    useEffect(() => {
        fetchIndividualPokemonData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pokemon])

    return { pokemon, getPokedexPokemon, pokemonData }
}