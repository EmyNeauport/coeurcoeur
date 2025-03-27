
import '../assets/styles/Card.scss'

function Card({image, alt, title, text}) {
    return(
        <div className='card'>
            <div className='card_img'>
                <img src={image} alt={alt}/>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}

export default Card