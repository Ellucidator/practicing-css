import { Link } from "react-router-dom";
import './header.css'
import logoMarca from './img/logo-marca.gif'

export default function Header() {
    return (
        <header>
            <img src={logoMarca} alt="Bio-Corpo-Academia" id="logo-marca" />
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">Contato</Link>
                <button></button>
            </nav>
        </header>
    )
}