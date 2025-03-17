import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(true);
  const location = useLocation(); // Get the current location (URL)

  // Set active link based on current route
  const activeLink = location.pathname;

  const handleNav = () => {
    setNav(!nav);
  };

  // Function to handle closing the mobile menu on link click
  const handleLinkClick = () => {
    if (!nav) {
      handleNav(); // Close the menu on mobile when a link is clicked
    }
  };

  return (
    <div className='fixed top-0 left-0 right-0 z-50 max-md:mx-8 mx-auto max-w-[1240px] max-sm:mx-3 my-8'>
      <div className='flex justify-between text-white md:mx-auto'>
        <Link className='text-[#25F09F] text-2xl' to='/' onClick={handleLinkClick}>Ermias</Link>
        <div className='hidden md:flex justify-between gap-4 text-sm items-center'>
          <Link
            className={`hover:text-[#25F09F] hover:no-underline ${activeLink === '/' ? 'text-[#25F09F] underline' : 'text-white'}`}
            to='/'
            onClick={handleLinkClick}>
            Home
          </Link>
          <Link
            className={`hover:text-[#25F09F] ${activeLink === '/services' ? 'text-[#25F09F] underline' : 'text-white'}`}
            to='/services'
            onClick={handleLinkClick}>
            Services
          </Link>
          <Link
            className={`hover:text-[#25F09F] ${activeLink === '/Resume' ? 'text-[#25F09F] underline' : 'text-white'}`}
            to='/Resume'
            onClick={handleLinkClick}>
            Resume
          </Link>
          <Link
            className={`hover:text-[#25F09F] ${activeLink === '/work' ? 'text-[#25F09F] underline' : 'text-white'}`}
            to='/work'
            onClick={handleLinkClick}>
            Work
          </Link>
          <Link
            className={`hover:text-[#25F09F] ${activeLink === '/contact' ? 'text-[#25F09F] underline' : 'text-white'}`}
            to='/contact'
            onClick={handleLinkClick}>
            Contact
          </Link>
          
          <div className="relative group">
            <a href='https://www.upwork.com/freelancers/~0123305dca45e8d9cf'><button className="bg-[#25F09F] rounded-lg p-1 px-3 text-black hover:text-gray-600">
              Hire me
            </button>
            </a>
            <div className="absolute left-1/2 transform -translate-x-1/2 translate-y-6 opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="animate-bounce text-orange-400 -rotate-10 font-black">Hire!</div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className="absolute right-5 top-8 md:hidden text-[#00df9a] text-end z-50">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed left-0 top-0 w-[55%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 z-50 ${nav ? "left-[-100%]" : "left-0"}`}
      >
        <div className="uppercase p-4 text-white flex flex-col gap-8">
          <Link
            className={`hover:text-[#25F09F] ${activeLink === '/' ? 'text-[#25F09F] underline' : 'text-white'}`}
            to='/'
            onClick={handleLinkClick}>
            Home
          </Link>
          <Link
            className={`hover:text-[#25F09F] ${activeLink === '/services' ? 'text-[#25F09F] underline' : 'text-white'}`}
            to='/services'
            onClick={handleLinkClick}>
            Services
          </Link>
          <Link
            className={`hover:text-[#25F09F] ${activeLink === '/Resume' ? 'text-[#25F09F] underline' : 'text-white'}`}
            to='/Resume'
            onClick={handleLinkClick}>
            Resume
          </Link>
          <Link
            className={`hover:text-[#25F09F] ${activeLink === '/work' ? 'text-[#25F09F] underline' : 'text-white'}`}
            to='/work'
            onClick={handleLinkClick}>
            Work
          </Link>
          <Link
            className={`hover:text-[#25F09F] ${activeLink === '/contact' ? 'text-[#25F09F] underline' : 'text-white'}`}
            to='/contact'
            onClick={handleLinkClick}>
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
