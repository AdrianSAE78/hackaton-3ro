import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import '../styles/header.css'
import { Link } from "react-router-dom"

function Header({ src, color }) {
    return (
        <header style={{background: color}}>
            <nav className="nav">
                <ul className="nav-section">
                    <li className="nav-item">
                        <Link to="/">
                            <picture>
                                <img className="page-logo" src={src} alt="Logo de página" />
                            </picture>
                        </Link>
                    </li>
                    <li className="nav-item"><Link to="/movies" className="nav-link">Peliculas</Link></li>
                    <li className="nav-item"><Link to="/series" className="nav-link">Series</Link></li>
                    <li className="nav-item"><Link className="nav-link">Animes</Link></li>
                </ul>
                <ul className="nav-section">
                    <li className="nav-item"><button className="search"><FontAwesomeIcon icon={faMagnifyingGlass} /></button></li>
                </ul>
                <ul className="nav-section">
                    <li className="nav-item"><button className="language">ES</button></li>
                    <li className="nav-item"><Link className="nav-link">Iniciar Sesión</Link></li>
                    <li className="nav-item"><Link className="nav-link">Únete</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header