import logo from '../assets/logo_vertical.svg'
import '../assets/styles/Footer.scss'

function Footer() {
    return (
        <div className='footer'>
            <div className='footer_logo'>
                <img src={logo} alt="logo coeurcoeur" />
            </div>
            <div className='footer_link'>
                <a 
                href="https://www.linkedin.com/in/emilie-neauport-753276106/"
                target="_blank"
                rel="noopener noreferrer">Linkedin</a>
                <a
                href="https://github.com/EmyNeauport"
                target="_blank"
                rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    )
}

export default Footer