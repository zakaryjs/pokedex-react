import { SyntheticEvent, useState } from "react"
import { useNavigate } from "react-router-dom"
import '../styles/Search.css'

export default function Search () {


    const [searchValue, setSearchValue] = useState<string>('')
    const navigate = useNavigate()

    function onSubmit (event: SyntheticEvent) {
        event.preventDefault()
        console.log('submitted: ' + searchValue)
        navigate('/pokemon/' + searchValue)
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Search</h1>
                <form onSubmit={onSubmit}>
                    <input onChange={(event) => {setSearchValue(event.target.value)}} value={searchValue}></input>
                </form>
            </header>
        </div>
    )
}