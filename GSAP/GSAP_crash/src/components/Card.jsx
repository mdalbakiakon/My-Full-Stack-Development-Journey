import React from 'react'

const Card = ({children}) => {
  return (
    <div className="w-1/2 bg-[linear-gradient(to_bottom,var(--bg-col),black)] rounded-[75px] p-10">
        {children}
    </div>
  )
}

export default Card