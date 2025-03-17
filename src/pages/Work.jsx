import React from 'react';
import Tina from '../assets/tina2.png';
import INSA from '../assets/insa.png';
import EfuyeGela from '../assets/efuyegela.jpg';

function Work() {
  return (
    <div className='p-16 mt-16 text-gray-300 max-md:mx-10'>
      <h1 className='text-center text-2xl pb-4 font-bold'>My work experience in real companies</h1>

      <div className='text-gray-300 px-12 grid sm:text-[15px] lg:grid-cols-3 gap-8'>
        {/* Tina-Mart Internship */}
        <div className='card bg-[#09251b] w-96 shadow-sm transform transition-all duration-300 hover:scale-105'>
          <div className='card-body'>
            <h2 className='card-title'>Tina-Mart Business Group</h2>
            <p>
              Worked as a paid intern on the admin panel, enhancing the frontend, fixing translation errors,
              and debugging UI issues before launch.
            </p>
          </div>
          <figure>
            <img className='w-full h-64' src={Tina} alt='Tina-Mart Business Group' />
          </figure>
        </div>

        {/* INSA Internship */}
        <div className='card bg-[#09251b] w-96 shadow-sm transform transition-all duration-300 hover:scale-105'>
          <div className='card-body'>
            <h2 className='card-title'>INSA (Information Network Security Agency)</h2>
            <p>
              Currently interning at INSA, working on a Partnership Management System using MERN stack,
              focusing on UI design and backend integration.
            </p>
          </div>
          <figure className='bg-white'>
            <img className='w-fit h-64' src={INSA} alt='INSA - Ethiopia' />
          </figure>
        </div>

        {/* Task Management System Internship */}
        <div className='card bg-[#09251b] w-96 shadow-sm transform transition-all duration-300 hover:scale-105'>
          <div className='card-body'>
            <h2 className='card-title'>Task Management System Project</h2>
            <p>
              Interned for two months in August 2024, developing a Task Management System with React,
              focusing on UI components and performance optimization.
            </p>
          </div>
          <figure className='bg-white'>
            <img className='w-fit h-64' src={EfuyeGela} alt='Task Management System' />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default Work;
