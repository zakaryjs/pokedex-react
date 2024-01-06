import { PokeAPI } from "pokeapi-types";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Favourites () {

    const [favouritePokemon, setFavouritePokemon] = useState<PokeAPI.Pokemon[]>([])
    const [visible, setVisible] = useState<boolean>(false)
    const navigate = useNavigate()

    function getFavourites() {
        let favouriteArray = JSON.parse(
            localStorage.getItem('favourites') || '[]'
        )

        setFavouritePokemon(favouriteArray)
        if (favouriteArray.length > 0) {
            setVisible(true)
        }

        favouriteArray.forEach((pokemon: PokeAPI.Pokemon) => {
            console.log(pokemon)
        });
    }

    function clearLocalStorage () {
        localStorage.removeItem('favourites')
        window.location.reload()
    }

    useEffect(() => {
        getFavourites()
    }, [])

    return (
        <div className="App">
            <header className="App-header">
                <h1>Favourites</h1>
                {visible && <button onClick={() => {clearLocalStorage()}}>Clear</button>}
                {favouritePokemon!.map((pokemon: PokeAPI.Pokemon) => (
                    <div key={pokemon.name} onClick={() => {navigate(`/pokemon/${pokemon.name}`)}}>
                        <h1>{pokemon.name}</h1>
                        <img src={pokemon.sprites.front_default} alt={pokemon.name} />
                    </div>
                ))}
            </header>
        </div>
    )
}