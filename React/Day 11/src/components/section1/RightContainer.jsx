import React from 'react'
import Card from './Card'
import { dummy } from '../../assets/section1/dummy'

const RightContainer = () => {
  return (
    <div id='RightContainer' className="flex-1 h-full flex gap-5 justify-start items-center overflow-x-scroll flex-nowrap scroll-smooth">
      {
        dummy.map(elem=>(
          <Card 
            id={elem.id}
            image={elem.image}
            description={elem.description}
            btnColor={elem.btnColor}
          />
        )) 
      }
    </div>
  )
}

export default RightContainer