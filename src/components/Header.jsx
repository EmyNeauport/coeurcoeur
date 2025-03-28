import { Link } from "react-router-dom"
import logoHeader from '../assets/logo_horizontal.svg'
import '../assets/styles/Header.scss'

function Header() {
    return (
    <div className="header">
        <div className="header_content">
            <div>
                <Link to="/">
                        <img src={logoHeader} alt="logo coeurcoeur" />
                </Link>
            </div>
            <nav className="header_content-nav">
                <Link to="/portfolio">
                    <p>Portfolio</p>
                </Link>
                <a href="mailto:neauportemilie@gmail.com?subject=Demande%20de%20contact" class="contact-button">
                    Contact
                </a>
            </nav>
        </div>
        <hr className="header_separator"/>
     </div>
)
}

export default Header