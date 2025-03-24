import Header from '../components/Header'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Skills from '../components/Skills'
import Me from '../components/Me'
import Footer from '../components/Footer'
import separator from '../assets/separator.svg'
import '../assets/styles/Home.scss'

function HomePage() {
    return (
        <div className='home'>
            <Header />
            <Intro />
            <div className='home_separator'>
                <img src={separator} />
            </div>
            <Services />
            <Skills />
            <Me />
            <Footer />
        </div>
    )
}

export default HomePage