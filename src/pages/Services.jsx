import React from 'react'
import Navbar from '../components/Navbar'
import { FaArrowCircleDown } from 'react-icons/fa'
function Services() {
  return (
    <div className='mx-auto'>
      {/* <Navbar/> */}
      <div className='grid grid-cols-1 md:grid-cols-2 font-mono text-white mt-12 gap-8'>
        <div className='flex flex-col p-4 px-8 transform transition duration-300 hover:scale-105 bg-gray-800'>
           <div className='flex justify-between '> <h1 className='text-4xl'>01</h1> <button> <FaArrowCircleDown/> </button></div>
            <h2 className='text-2xl'>Web Development</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Facere at amet laborum dolorem pariatur aperiam eius esse.</p>
        </div><div className='flex flex-col p-4 px-8 transform transition duration-300 hover:scale-105  bg-gray-800'>
           <div className='flex justify-between '> <h1 className='text-4xl'>01</h1> <button> <FaArrowCircleDown/> </button></div>
            <h2 className='text-2xl'>Web Development</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Facere at amet laborum dolorem pariatur aperiam eius esse.</p>
        </div><div className='flex flex-col p-4 px-8 transform transition duration-300 hover:scale-105 bg-gray-800'>
           <div className='flex justify-between '> <h1 className='text-4xl'>01</h1> <button> <FaArrowCircleDown/> </button></div>
            <h2 className='text-2xl'>Web Development</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Facere at amet laborum dolorem pariatur aperiam eius esse.</p>
        </div><div className='flex flex-col p-4 px-8 transform transition duration-300 hover:scale-105 bg-gray-800'>
           <div className='flex justify-between '> <h1 className='text-4xl'>01</h1> <button> <FaArrowCircleDown/> </button></div>
            <h2 className='text-2xl'>Web Development</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. <br/> Facere at amet laborum dolorem pariatur aperiam eius esse.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
