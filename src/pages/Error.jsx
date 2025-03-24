import Header from'../components/Header'
import Footer from'../components/Footer'

import light from '../assets/light_broken.svg'
import '../assets/styles/Error.scss'

function ErrorPage() {
    return (
        <div>
            <Header />
            <div className='error'>
                <div className='error-img'>
                    <img src={light} alt='ampoule brisée' />
                </div>
                <div className='error-msg'>
                    <h1>404</h1>
                    <p>PAGE NOT FOUND</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default ErrorPage