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
            <nav>
                <Link to="/portfolio">
                    <p>Portfolio</p>
                </Link>
            </nav>
        </div>
        <hr className="header_separator"/>
     </div>
)
}

export default Header