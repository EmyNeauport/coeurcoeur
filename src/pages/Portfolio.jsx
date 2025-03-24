import Header from'../components/Header'
import ProjectList from '../components/ProjectList'
import Footer from'../components/Footer'
import light from '../assets/light.svg'

import '../assets/styles/Portfolio.scss'

function PortfolioPage() {
    return (
        <div>
            <Header />
            <div className='portfolio-intro'>
                <div className='portfolio-txt'>
                    <h1>Portfolio</h1>
                    <p>Sélection de travaux personnels</p>
                </div>
                {/* <img src={light} alt='mascotte ampoule souriante'/> */}
            </div>
            <ProjectList />
            <Footer />
        </div>
    )
}

export default PortfolioPage