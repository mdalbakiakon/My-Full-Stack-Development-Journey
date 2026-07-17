import React from 'react'
import Card from './components/Card'
import { users } from './assets/dummy'

const App = () => {
  return (
    <div className='container flex flex-wrap justify-center items-center gap-5 p-5'>
      {users.map((e) => (
        <Card key={e.id} user={e} />
      ))}
    </div>
  )
}

export default App