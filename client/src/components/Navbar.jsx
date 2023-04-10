import { NavLink } from "react-router-dom";

export default function Navbar(props) {
    return (
        <nav>
            <h1>Recipe Finder</h1>
            <NavLink to="/">Home</NavLink>
            <NavLink to="about">About</NavLink>
        </nav>
        
    )
}