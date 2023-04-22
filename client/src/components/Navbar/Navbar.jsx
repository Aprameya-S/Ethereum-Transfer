import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
  return (
    <nav className='navbar flex flex-wrap gap-10'>
      <Link to='/'>Home</Link>
      <Link to='/campaigns'>Campaigns</Link>
      <Link to='/profile'>Profile</Link>
      <button
        className='bg-teal-400 px-3 rounded-[5px] focus:bg-blue-400'
      >Connect</button>
    </nav>
  )
}

export default Navbar