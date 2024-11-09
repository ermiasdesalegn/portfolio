// import React,{useState} from 'react'
// import { BrowserRouter, Route, Routes, NavLink } from 'react-router-dom';
// import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// function Navbar() {

//   const [nav, setNav] = useState(true);
//   const handleNav = () => {
//     setNav(!nav);
//   };

//   return (
   
//     <div className='md:mx-8 mx-auto'>
//       <div className='flex justify-between  text-white md:mx-auto '>
//         <h1>Ermias</h1>
//         <div className='hidden md:flex justify-between gap-4 text-sm items-center'>
//             {/* <NavLink className='hover:text-[#25F09F] hover:no-underline text-[#25F09F] underline' to='/'>Home</NavLink> */}
//             {/* <NavLink className='hover:text-[#25F09F]' to={Services} >Services</NavLink> */}
//             {/* <NavLink className='hover:text-[#25F09F]' to='/'>Resume</NavLink>
//             <NavLink className='hover:text-[#25F09F]' to='/'>Work</NavLink>
//             <NavLink className='hover:text-[#25F09F]' to='#'>Contact</NavLink> */}
//             <a className='hover:text-[#25F09F] hover:no-underline text-[#25F09F] underline' href='#'>Home</a> 
//             <a className='hover:text-[#25F09F]' href='../pages/Services' >Services</a> 
//             <a className='hover:text-[#25F09F]' href='#'>Resume</a>
//             <a className='hover:text-[#25F09F]' href='#'>Work</a>
//             <a className='hover:text-[#25F09F]' href='#'>Contact</a> 

//             <button className='bg-[#25F09F] rounded-lg p-1 px-3 text-black hover:text-gray-600'>Hire me</button>
//         </div>
//       </div>
//       <div onClick={handleNav} className="absolute right-5 top-8 md:hidden text-[#00df9a] text-end">
//         {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
//       </div>
//       <div
//         className={
//           !nav
//             ? "fixed left-0 top-0 w-[55%] h-full border-r border-r-gray-900  bg-[#000300] ease-in-out duration-500 "
//             : "fixed left-[-100%] text-[#00df9a]"
//         }
//       >
//        <div className="uppercase p-4 text-white flex flex-col gap-8 ">
//        <a className='hover:text-[#25F09F] hover:no-underline text-[#25F09F] underline' href='#'>Home</a> 
//             <a className='hover:text-[#25F09F]' href='/service' >Services</a> 
//             {/* <a className='hover:text-[#25F09F]' href='/resume'>Resume</a>
//             <a className='hover:text-[#25F09F]' href='/work'>Work</a>
//             <a className='hover:text-[#25F09F]' href='/contact'>Contact</a>  */}

//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useState } from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink from react-router-dom
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className='md:mx-8 mx-auto'>
      <div className='flex justify-between text-white md:mx-auto'>
        <h1>Ermias</h1>
        <div className='hidden md:flex justify-between gap-4 text-sm items-center'>
          {/* Using NavLink instead of href */}
          <NavLink className='hover:text-[#25F09F] hover:no-underline text-[#25F09F] underline' to='/'>Home</NavLink>
          <NavLink className='hover:text-[#25F09F]' to='/services'>Services</NavLink> 
          <NavLink className='hover:text-[#25F09F]' to='/Resume'>Resume</NavLink>
          <NavLink className='hover:text-[#25F09F]' to='/work'>Work</NavLink>
          <NavLink className='hover:text-[#25F09F]' to='/contact'>Contact</NavLink>
          
          <button className='bg-[#25F09F] rounded-lg p-1 px-3 text-black hover:text-gray-600'>Hire me</button>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div onClick={handleNav} className="absolute right-5 top-8 md:hidden text-[#00df9a] text-end">
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Menu */}
      <div
        className={
          !nav
            ? "fixed left-0 top-0 w-[55%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "fixed left-[-100%] text-[#00df9a]"
        }
      >
        <div className="uppercase p-4 text-white flex flex-col gap-8">
          {/* Mobile Menu Links */}
          <NavLink className='hover:text-[#25F09F] hover:no-underline text-[#25F09F] underline' to='/' onClick={handleNav}>Home</NavLink>
          <NavLink className='hover:text-[#25F09F]' to='/services' onClick={handleNav}>Services</NavLink>
          <NavLink className='hover:text-[#25F09F]' to='/resume' onClick={handleNav}>Resume</NavLink>
          <NavLink className='hover:text-[#25F09F]' to='/work' onClick={handleNav}>Work</NavLink>
          <NavLink className='hover:text-[#25F09F]' to='/contact' onClick={handleNav}>Contact</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
