import React from 'react'
import { HashLink } from 'react-router-hash-link'
import './App.css'

const NavBar = () => {
  return (
    <div className='bg-black text-white h-[60px] items-center justify-center flex fixed w-full z-50'>
     <nav className='container mx-[100PX] flex items-center justify-between cursor-pointer'>

<div className='text-2xl font-bold'>
    <h1>mohsen.dev</h1>
</div>
  <div>
  <HashLink
  to="/#home"
  className="mr-5 px-4 py-2 text-white bg-sky-700 hover:text-white hover:bg-sky-600 rounded-xl transition duration-300"
>
  Home
</HashLink>

<HashLink
  to="/#about"
  className="mr-5 px-4 py-2 text-wihite-700 hover:text-white hover:bg-sky-600 rounded-xl transition duration-300"
>
  About
</HashLink>

<HashLink
  to="/#projectss"
  className="mr-5 px-4 py-2 text-wihite-700 hover:text-white hover:bg-sky-600 rounded-xl transition duration-300"
>
  Projectss
</HashLink>

<HashLink
  to="/#skills"
  className="mr-5 px-4 py-2 text-wihite-700 hover:text-white hover:bg-sky-600 rounded-xl transition duration-300"
>
  Skills
</HashLink>
<HashLink
  to="/#contact"
  className="mr-5 px-4 py-2 text-wihite-700 hover:text-white hover:bg-sky-600 rounded-xl transition duration-300"
>
  Contact
</HashLink>
</div>

     </nav>
    </div>
  )
}

export default NavBar