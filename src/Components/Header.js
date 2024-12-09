import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className='stick top-0 p-2 flex justify-between items-center shadow-lg'>
        <div>
            <img src={logo} alt='Logo' className='h-16 w-16 rounded-lg'/>
        </div>
        <nav>
            <Link>Home</Link>
            <Link>Products</Link>
            <Link>About Us</Link>
            <Link>Contact Us</Link>
        </nav>
        <div>
            <button className='bg-blue-500 px-4 py-2 rounded-lg text-white mr-2 hover:bg-blue-700 transition duration-300' >Login</button>
            <button  className='bg-blue-500 px-4 py-2 rounded-lg text-white mr-2 hover:bg-blue-700 transition duration-300'>Sign Up</button>
        </div>
    </header>
  )
}

export default Header