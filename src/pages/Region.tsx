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
        <Button className="button-margin" onClick={() => {navigate('/region/johto')}} variant="info">Johto</Button>
        <Button className="button-margin" onClick={() => {navigate('/region/hoenn')}} variant="info">Hoenn</Button>
        <Button className="button-margin" onClick={() => {navigate('/region/sinnoh')}} variant="info">Sinnoh</Button>
        <Button className="button-margin" onClick={() => {navigate('/region/unova')}} variant="info">Unova</Button>
        <Button className="button-margin" onClick={() => {navigate('/region/kalos')}} variant="info">Kalos</Button>
        <Button className="button-margin" onClick={() => {navigate('/region/alola')}} variant="info">Alola</Button>
        <Button className="button-margin" onClick={() => {navigate('/region/galar')}} variant="info">Galar</Button>
        <Button className="button-margin" onClick={() => {navigate('/region/paldea')}} variant="info">Paldea</Button>
      </header>
    </div>
    )
}