import '../assets/styles/Project.scss'

function Project({image, alt, title, text, brief, mission, link}) {
    return(
        <div className='project'>
            <div className='project-img'>
                <img src={image} alt={alt}/>
            </div>
            <h2>{title}</h2>
            <p>{text}</p>
            <div className='detail'>
                <div className="project-brief">
                    <p className="project-brief_title">Brief client :</p>
                    {brief && brief.length > 0 && (
                        <ul>
                        {brief.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                        </ul>
                    )}
                </div>
                <div className="project-mission">
                    <p>Mission :</p>
                    {mission && mission.length > 0 && (
                        <ul >
                        {mission.map((point, i) => (
                            <li key={i}>{point}</li>
                        ))}
                        </ul>
                    )}
                </div>
            </div>
            <a href={link}target="_blank" rel="noopener noreferrer">Visiter le site</a>
        </div>
    )
}

export default Project