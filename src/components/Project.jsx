import '../assets/styles/Project.scss'

function Project({image, alt, title, text, link}) {
    return(
        <div className='project'>
            <div className='project-img'>
                <img src={image} alt={alt}/>
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
            <a href={link}target="_blank" rel="noopener noreferrer">Visiter le site</a>
        </div>
    )
}

export default Project