import { useState, useEffect } from "react"
import Card from "./Card"
import cardsData from "../../data.json"
import '../assets/styles/CardList.scss'

function CardList() {
    const [cards, setCards] = useState([])
    useEffect(() => {
      setCards(cardsData)
    }, [])
  
    return (
      <div className="cardlist">
        {cards.map((card) => (
          <Card
            image={card.image}
            title={card.title}
            text={card.text}
          />
        ))}
      </div>
    )
  }

export default CardList