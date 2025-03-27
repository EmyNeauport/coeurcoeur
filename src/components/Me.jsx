import me from '../assets/me.jpeg'
import '../assets/styles/Me.scss'

function Me() {
    return(
        <div className='me'>
            <div className='me_txt'>
                <h2>Présentation</h2>
                <hr className='separator' />
                <p>Après 10 années passées dans le secteur de l’assurance, où j’ai évolué en tant que cheffe de projet et responsable AMOA, j’ai choisi de me réinventer en me formant au développement web. Aujourd’hui, j’assemble mes compétences métier et techniques pour accompagner les entreprises dans la réussite de leurs projets digitaux, avec une approche claire, structurée et toujours bienveillante. Ce qui me rend unique, c’est ce double regard : comprendre les besoins des utilisateurs et les transformer en solutions concrètes, que je peux désormais aussi coder de mes propres mains ! J’aime les projets bien ficelés, les échanges simples et directs, et surtout les collaborations humaines, où on avance avec sérieux, bienveillance et bonne humeur. Si vous cherchez une cheffe de projet à l'écoute, organisée et capable de jongler entre stratégie, AMOA et front-end, parlons-en !</p>
            </div>
            <div className='me_img'>
                <img src={me} alt="portrait"/>
            </div>
        </div>
    )
}

export default Me