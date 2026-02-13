import React from 'react'
import { useState } from 'react'

const Home = () => {
    const [user, setUser] = useState("Siam")
    
    const changeUser = () => {
      console.log(user)
      setUser("Mishkath")
      console.log(user) //still will print Siam because React re renders the value when the function is fully invoked so next time it will show Mishkath
    }

  return (
    <div className='font-semibold flex flex-col justify-center items-center gap-5'>
        <p className='text-5xl'>{user}</p>
        <button onClick={changeUser} className='text-2xl px-4 py-2.5 bg-green-400 rounded-2xl cursor-pointer'>Change Name</button>
    </div>
  )
}

export default Home