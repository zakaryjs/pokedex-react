import Header from "../components/Header";
import Button from 'react-bootstrap/Button';
import '../styles/Region.css'
import { useNavigate } from 'react-router-dom';

export default function Region () {

  const navigate = useNavigate()

    return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Button className="button-margin" onClick={() => {navigate('/region/kanto')}} variant="info">Kanto</Button>
        <Button className="button-margin" variant="info">Johto</Button>
        <Button className="button-margin" variant="info">Hoenn</Button>
        <Button className="button-margin" variant="info">Sinnoh</Button>
        <Button className="button-margin" variant="info">Unova</Button>
        <Button className="button-margin" variant="info">Kalos</Button>
        <Button className="button-margin" variant="info">Alola</Button>
        <Button className="button-margin" variant="info">Galar</Button>
        <Button className="button-margin" variant="info">Paldea</Button>
      </header>
    </div>
    )
}