import React from 'react';
import { FaArrowCircleDown } from 'react-icons/fa';

function Services() {
  return (
    <div className='mx-auto h-svh mt-24'>
      <div className='grid grid-cols-1 md:grid-cols-2 font-mono text-gray-300 mt-12 gap-8 text-base'>
        
        {/* Frontend Development */}
        <div className='flex flex-col p-5 px-8 transform transition duration-300 hover:scale-105 bg-[#09251b]'>
          <div className='flex justify-between'>
            <h1 className='text-3xl font-bold'>01</h1>
            <button> <FaArrowCircleDown /> </button>
          </div>
          <h2 className='text-2xl font-semibold'>Frontend Development</h2>
          <p className="text-sm">
            Crafting seamless, high-performance user interfaces with React.js and Next.js.  
            Focused on responsive designs, optimized rendering, and modern UI libraries like ShadCN & DaisyUI.
          </p>
        </div>

        {/* AI-Powered Web Apps */}
        <div className='flex flex-col p-5 px-8 transform transition duration-300 hover:scale-105 bg-[#09251b]'>
          <div className='flex justify-between'>
            <h1 className='text-3xl font-bold'>02</h1>
            <button> <FaArrowCircleDown /> </button>
          </div>
          <h2 className='text-2xl font-semibold'>AI-Powered Web Apps</h2>
          <p className="text-sm">
            Integrating AI-driven features into web applications, enhancing automation, chatbots,  
            and personalized user experiences with cutting-edge APIs.
          </p>
        </div>

        {/* Backend Development */}
        <div className='flex flex-col p-5 px-8 transform transition duration-300 hover:scale-105 bg-[#09251b]'>
          <div className='flex justify-between'>
            <h1 className='text-3xl font-bold'>03</h1>
            <button> <FaArrowCircleDown /> </button>
          </div>
          <h2 className='text-2xl font-semibold'>Backend Development</h2>
          <p className="text-sm">
            Building scalable and secure backends using Node.js and Django.  
            Experience with REST APIs, authentication, and database management.
          </p>
        </div>

        {/* Full-Stack Project Optimization */}
        <div className='flex flex-col p-5 px-8 transform transition duration-300 hover:scale-105 bg-[#09251b]'>
          <div className='flex justify-between'>
            <h1 className='text-3xl font-bold'>04</h1>
            <button> <FaArrowCircleDown /> </button>
          </div>
          <h2 className='text-2xl font-semibold'>Full-Stack Project Optimization</h2>
          <p className="text-sm">
            Optimizing performance, debugging complex issues, and ensuring best practices  
            in both frontend and backend development for a smooth user experience.
          </p>
        </div>

      </div>
    </div>
  );
}

export default Services;
