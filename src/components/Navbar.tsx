import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <div className='shadow-[0px_10px_15px_rgba(17,63,103,0.6)] rounded-b-3xl'>
      <nav className='mx-auto px-6 py-8 sm:container md:container lg:container flex flex-row justify-between items-center font-bold uppercase'>
        <ul className='flex items-center gap-6 flex-row'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/todos'>Todo List</Link></li>
        </ul>
        <ul className='flex items-center gap-6 flex-row'>
          <li><Link href='/signup'>Sign Up</Link></li>
          <li><Link href='/login'>Log In</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar