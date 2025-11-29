import React from 'react'

const Navbar = () => {
  return (
    <nav className=' bg-stone-950 text-white'>
      <div className='max-w-5xl flex justify-between items-center p-4 mx-auto'>
        <h1 className='text-4xl font-bold'>Dev <span className='text-orange-500'>Overflow</span></h1>

        <div>Search</div>

        <div>auth Profile</div>
      </div>
    </nav>
  )
}

export default Navbar