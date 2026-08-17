import React from 'react'
import menCollection from '../data/menCollection'
import ShoeCard from '../components/ShoeCard'

const Home = () => {
  return (
    <div className='grid grid-cols-4 gap-2.5 w-full max-w-6xl mx-auto mt-12.5'>
        {menCollection.map((Element) => {
            return <ShoeCard key={Element.id} product={Element} />
        })}
    </div>
  )
}

export default Home