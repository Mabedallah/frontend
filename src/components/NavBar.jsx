import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {Link} from 'react-scroll'

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='h-[96px]  glass px-8 text-gray-300 max-w-[1200px] flex justify-between items-center mx-auto'>
      <h1 className='text-xl font-bold'>Mohamed Abed Allah</h1>
      <ul className='hidden md:flex gap-6 text-xl'>
        <li>
          <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="About" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="Portfolio" spy={true} smooth={true} offset={50} duration={500}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      <div className="block md:hidden text-gray-300 fixed right-10 top-10 z-50" onClick={handleNav}>
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30}/>}
      </div>
      {/* Mobile Menue */}
      <div className={nav ? 'text-gray-300 z-40 fixed left-0 top-0 w-full bg-[#232323] ease-in-out duration-300' : 'fixed left-[-100%] '}>
        <ul className='p-8 text-3xl ml-20 z-10'>
        <li className='p-2'>
          <Link to="Home" spy={true} smooth={true} offset={50} duration={500}>
            Home
          </Link>
        </li>
        <li className='p-2'>
          <Link to="About" spy={true} smooth={true} offset={50} duration={500}>
            About
          </Link>
        </li>
        <li className='p-2'>
          <Link to="Portfolio" spy={true} smooth={true} offset={50} duration={500}>
            Portfolio
          </Link>
        </li>
        <li className='p-2'>
          <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>
            Contact
          </Link>
        </li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar