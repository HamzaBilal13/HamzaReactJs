import React, { useState } from 'react'

const Home = () => {
  const [show, setshow]=useState(false);
  return (
    <div className="flex justify-center">
      {show && <p>Hi How are you!</p>}
      <button className="bg-blue-600 px-4 py-2 text-white" onClick={() => setshow(!show)}>Show/hide</button>
      
    </div>

  )
}

export default Home
