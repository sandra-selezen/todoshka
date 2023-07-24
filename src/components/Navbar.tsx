import React from 'react'

const Navbar = () => {
  return (
    <nav className='mx-auto p-8 bg-fuchsia-300 w-full flex flex-row justify-between items-center font-bold text-fuchsia-950'>
      <ul className='flex items-center gap-6 flex-row'>
        <li>Home</li>
        <li>Todo List</li>
      </ul>
      <ul className='flex items-center gap-6 flex-row'>
        <li>Sign Up</li>
        <li>Log In</li>
      </ul>
    </nav>
  )
}

export default Navbar