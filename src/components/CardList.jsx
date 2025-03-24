import { useState, useEffect } from "react"
import Card from "./Card"
import cardsData from "../../data.json"
import '../assets/styles/CardList.scss'

import gestionprojet from '../assets/gestionprojet.jpg'
import amoa from '../assets/amoa.jpg'
import dev from '../assets/dev.jpg'

const imageMap = {
  "gestionprojet.jpg": gestionprojet,
  "amoa.jpg": amoa,
  "dev.jpg": dev
}

function CardList() {
    const [cards, setCards] = useState([])
    useEffect(() => {
      setCards(cardsData)
    }, [])
  
    return (
      <div className="cardlist">
        {cards.map((card, index) => (
           <Card
           key={index}
           image={imageMap[card.image]} // 🔁 image résolue via la map
           title={card.title}
           text={card.text}
         />
        ))}
      </div>
    )
  }

export default CardList