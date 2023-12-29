import { useState } from "react";

export function useGetRandomPokemon() {

    interface Pokemon {
        id?: number;
        name?: string;
        base_experience?: number;
        height?: number;
        is_default?: boolean;
        order?: number;
        weight?: number;
        sprites?: PokemonSprites
    }

    interface PokemonSprites {
        other: PokemonSpriteOther;
    }

    interface PokemonSpriteOther {
        "home": {
            front_default: string
        }
    }

    const [pokemon, setPokemon] = useState<Pokemon>({})

    function generateNumber() {
        return Math.floor(Math.random() * 905) + 1
    }

    async function getPokemon(pokemonId = generateNumber()) {
        let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonId)
        let data = await response.json()
        setPokemon(data)
    }

    return { pokemon, getPokemon }
}