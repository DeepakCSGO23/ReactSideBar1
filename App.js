import React, { useState } from 'react'
import {AiOutlineArrowLeft} from 'react-icons/ai'
function App() {
  const [open,setOpen]=useState(true);
  return (
    <div className='flex'>
      <div className={'bg-[#435c8b] h-screen ${open ? "w-32" : "w-8"} p-5 pt-8 relative'}>
        <AiOutlineArrowLeft className='bg-white rounded-full border-2 
        absolute -right-2 cursor-pointer' onClick={()=>setOpen(!open)}/>
      </div>
      <div className='text-white p-7 font-semibold'>
        Homebar
      </div>
    </div>

  );
}

export default App;
