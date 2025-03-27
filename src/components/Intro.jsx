import heart from '../assets/heart.svg'
import light from '../assets/light.svg'
import key from '../assets/key.svg'
import '../assets/styles/Intro.scss'

function Intro() {
    return(
        <div className='intro'>
            <div className='intro_content'>
                <div className='intro_catchphrase'>
                    <h1>Des sites web faits avec le coeur.</h1>
                </div>
                <div className='intro_secondary'>
                    <div className='intro_mascot'>
                        <img src={heart} alt="mascotte principale coeur" className='mascot_one' />
                        <img src={light} alt="mascotte secondaire ampoule" className='mascot_two' />
                        <img src={key} alt="mascotte secondaire touche" className='mascot_three' />
                    </div>
                    <div className='intro_txts'>
                        <p className='intro_txt'>Je vous accompagne de la définition de vos besoins à la mise en ligne de votre site.</p>
                        <p className='intro_txt'>Cheffe de projet expérimentée et développeuse web, je suis à vos côté à chaque étape avec méthode, clarté et fiabilité.</p>
                        <p className='intro_txt'>Mon objectif : vous simplifier la vie, tout en créant un site design, fonctionnel et à votre image.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro