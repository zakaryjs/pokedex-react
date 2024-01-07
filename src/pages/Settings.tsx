import Button from 'react-bootstrap/Button';

export default function Settings () {

    const repoUrl = 'https://github.com/zakaryjs/pokedex-react'

    function clearLocalStorage () {
        localStorage.removeItem('favourites')
        window.location.reload()
    }

    return (
        <div className="App">
            <header className="App-header">
                <h1>Settings</h1>
                <Button className="button-margin" variant="info" onClick={() => {clearLocalStorage()}}>Clear Favourites</Button>
                <Button className="button-margin" variant="info" onClick={() => {window.open(repoUrl)}}>View the GitHub Repo</Button>
            </header>
        </div>
    )
}