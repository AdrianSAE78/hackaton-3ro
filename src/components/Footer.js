import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import '../styles/footer.css'

function Footer({ src, color }) {
    return (
        <footer style={{ background: color }} >
            <picture>
                <img className="footer-logo" src={src} alt="Logo de página" />
            </picture>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/adrian-acuña-b1b721242/" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/AdrianSAE78" target="_blank"><i class="fa-brands fa-github"></i>
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
            </ul>
            <p>© Adrian Acuña Estrada | Todos los Derechos Reservados</p>
        </footer>
    )
}

export default Footer