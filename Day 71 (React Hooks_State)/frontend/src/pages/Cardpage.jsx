import React from 'react'
import Card from '../components/Card.jsx'
import { cardsData } from '../data/cardData.js'

const Cardpage = () => {
  return (
    <div className='py-72 w-full max-w-7xl flex justify-center items-center mx-auto'>
        <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
            {cardsData.map((card, index) => (
                <Card key={index} 
                name={card.name} 
                rank={card.rank} 
                status={card.status} 
                image={card.image}/>
            ))}
        </div>
    </div>
  )
}

export default Cardpage