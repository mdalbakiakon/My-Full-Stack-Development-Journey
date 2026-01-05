import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#121212] font-outfit h-screen w-screen flex items-center justify-center flex-col gap-10'>
      <div className='text-9xl text-white font-bold tracking-tighter'>{count}</div>
      <button className='bg-[yellowgreen] px-10 py-4 font-semibold rounded-4xl shadow-2xl active:scale-95 transition-transform cursor-pointer'
      onClick={()=>setCount(count+1)}>
        click me
      </button>
    </div>
  );
}

export default App
