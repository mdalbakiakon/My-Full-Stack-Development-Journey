import React from 'react'

const Wrapper = ({children}) => {
  return (
    <div className='max-w-7xl mx-auto p-4 w-full'>
        {children}
    </div>
  )
}

export default Wrapper