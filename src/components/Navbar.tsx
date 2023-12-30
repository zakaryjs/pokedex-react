import { NavLink } from "react-router-dom";
import '../styles/Navbar.css'

export default function Navbar () {
    return (
        <div className="centred">
            <NavLink to="/" className={({isActive}) => isActive ? 'styledSelected' : 'styled'}>Home</NavLink>
            <NavLink to="/region" className={({isActive}) => isActive ? 'styledSelected' : 'styled'}>Region</NavLink>
            <NavLink to="/search" className={({isActive}) => isActive ? 'styledSelected' : 'styled'}>S</NavLink>
            <NavLink to="/favourites" className={({isActive}) => isActive ? 'styledSelected' : 'styled'}>Favourites</NavLink>
            <NavLink to="/settings" className={({isActive}) => isActive ? 'styledSelected' : 'styled'}>Settings</NavLink>
        </div>
    )
}