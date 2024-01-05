import { useParams } from "react-router-dom"
import { useFetchPokemon } from "../hooks/useFetchPokemon"
import { useEffect } from "react"

export default function Pokemon() {

    let { pokemon, getPokemon, type1, type2 } = useFetchPokemon()
    let {name} = useParams() as { name: string }

    useEffect(() => {
        getPokemon(name)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    useEffect(() => {
        console.log(pokemon)
    }, [pokemon])

    return (
        <div className="App">
            <header className="App-header">
                <h1>{pokemon?.name}</h1>
                <img src={pokemon?.sprites?.front_default} alt='pokemon' height={200} width={200}/>
                {type1 && <img className='type-margin' src={`https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/go/${type1}.png`} alt='type badge'/>}
                {type2 && <img className='type-margin' src={`https://raw.githubusercontent.com/msikma/pokesprite/master/misc/types/go/${type2}.png`} alt='type badge'/>}
            </header>
        </div>
    )
}