import React from 'react'

const Card = ({ user }) => {
  return (
    <div className='Card flex flex-col justify-center items-center rounded-xl p-2.5 bg-white w-fit gap-2.5'>
      <div className='w-40 aspect-square rounded-full overflow-hidden shadow-xl m-5'>
        <img src={user.dp} alt={user.user} className='w-full h-full object-cover' />
      </div>
      <div className='text-2xl font-semibold'>{user.user}</div>
      <div>{user.age}</div>
      <div className='flex justify-center items-center gap-2.5 flex-wrap'>
        {user.skills.map((skill, index) => (
          <span
            key={index}
            className='bg-gray-100 text-sm px-3 py-1 rounded-full'
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Card