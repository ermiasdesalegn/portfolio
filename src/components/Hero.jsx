import React from 'react'
import photo from '../assets/photo.jpg'
import{
  FaLinkedin,FaFacebook,FaGithub,FaDownload,FaTwitter,FaTelegram
} from 'react-icons/fa'

function Hero() {
  return (
    <div className='text-white text-center  mt-8 mx-8 '>
       <div className='block md:flex md:text-start md:mx-auto '>
        <div className='block mt-24 md:mt-12 md:flex md:flex-col gap-2 '>
          <p>Web Developer</p>
          <h1 className='text-4xl font-md mb-8'>Hello I'm <span className='text-[#25F09F]'>Ermias Desalegn</span> </h1>
          <p>Lorem ipsum dolor sit amet consectetur,<br/> adipisicing elit. Dolorem impedit soluta aliquid <br/> eius earum quos doloremque error, aperiam nulla </p>
          <div className='flex justify-between items-center my-8'>
          <button className='flex items-center gap-1 mx-auto md:mx-0 md:gap-2 border-2 border-[#25F09F] rounded-3xl p-2 px-2 text-[9px] sm:text-[10px] text-[#25F09F]' >Download CV <span > <FaDownload/></span> </button>
          <div className='flex gap-2 mx-auto justify-between'>
           <a className='text-[#000221] bg-[#25F09F] rounded-full p-1' href='#'><FaLinkedin className='w-5 h-5' /></a> 
           <a className='text-[#000221] bg-[#25F09F] rounded-full p-1' href='#'><FaGithub className='w-5 h-5' /></a> 
           <a className='text-[#000221] bg-[#25F09F] rounded-full p-1' href='#'><FaTelegram className='w-5 h-5' /></a> 
           <a className='text-[#000221] bg-[#25F09F] rounded-full p-1' href='#'><FaTwitter className='w-5 h-5' /></a> 
          </div>
          </div>
        </div>
        <div className='md:mt-[64px] md:ml-32 '><img className='w-[200px] h-[200px] md:w-[400px] md:h-[350px] lg:w-[300px] lg:h-[300px] mx-auto  rounded-full' src={photo} alt='my-photo'/>      
        </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-4 justify-between text-start text-gray-300 ml-[-50px] md:ml-0 mt-12 md:mt-16 my-12 gap-12 '>
          <div className='flex gap-2 mx-auto  md:mx-0 items-center w-10 '>
            <h1 className='text-5xl'>3</h1>
            <p className='text-sm'>years of  experience</p>
          </div>
          <div className='flex mx-auto md:mx-0  gap-2 items-center w-10 '>
            <h1 className='text-5xl font-sm'>3</h1>
            <p className='text-sm'>Projects completed</p>
          </div>
          <div className='flex gap-2 mx-auto md:mx-0  items-center w-10'>
            <h1 className='text-5xl font-medium'>3</h1>
            <p className='text-sm'>Technologies mastered</p>
          </div>
          <div className='flex gap-2 mx-auto  md:mx-0 items-center w-10'>
            <h1 className='text-5xl font-medium'>3</h1>
            <p className='text-sm'>Code commits</p>
          </div>
        </div>
    </div>
  )
}

export default Hero
