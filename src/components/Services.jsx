import '../assets/styles/Services.scss'
import CardList from './CardList'

function Services() {
    return (
        <div className='services'>
            <div className='services_content'>
                <h2>Services</h2>
                <hr className='separator'/>
                <div className='cards'>
                    <CardList />
                </div>
            </div>
        </div>
    )
}

export default Services