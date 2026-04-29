import React from 'react'

const Card = ({children}) => {
  return (
    <div className="w-full md:w-2/3 lg:w-1/2 max-w-250 h-fit bg-[linear-gradient(to_bottom,var(--bg-col),black)] rounded-[75px] p-10">
        {children}
    </div>
  )
}

export default Card