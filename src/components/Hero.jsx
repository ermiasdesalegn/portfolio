import React from 'react'
import photo from '../assets/photo.jpg'
import{
  FaLinkedin,FaGithub,FaDownload,FaTwitter,FaTelegram
} from 'react-icons/fa'

function Hero() {
  return (
    <div className='text-gray-300 text-center mt-16 mx-8 '>
       <div className='block md:flex md:text-start md:mx-auto '>
        <div className='block mt-24 md:mt-12 md:flex md:flex-col gap-2 '>
          <p>Web Developer</p>
          <h1 className='text-4xl font-md mb-8'>Hello I'm <span className='text-[#25F09F]'>Ermias Desalegn</span> </h1>
          <p className='w-96'>Hi, I'm Ermias Desalegn, a 4th-year Software Engineering student passionate about web development.  
            I specialize in Next.js, React.js, Node.js, Tailwind CSS, and Vanilla JavaScript, building secure,  
            high-performance, and user-friendly web apps. Dedicated to continuous learning and innovation.</p>
    <div className='flex justify-between items-center my-8'>
          <button className='flex items-center gap-1 mx-auto md:mx-0 md:gap-2 border-2 border-[#25F09F] rounded-3xl p-2 px-2 text-[9px] sm:text-[10px] text-[#25F09F]' >Download CV <span > <FaDownload/></span> </button>
          <div className='flex gap-2 mx-auto justify-between'>
           <a className='text-[#000221] bg-[#25F09F] rounded-full p-1' href='https://www.linkedin.com/in/ermias-desalegn-28b423323/'><FaLinkedin className='w-5 h-5' /></a> 
           <a className='text-[#000221] bg-[#25F09F] rounded-full p-1' href='https://github.com/ermiasdesalegn'><FaGithub className='w-5 h-5' /></a> 
           <a className='text-[#000221] bg-[#25F09F] rounded-full p-1' href='https://t.me/mhmystery'><FaTelegram className='w-5 h-5' /></a> 
           <a className='text-[#000221] bg-[#25F09F] rounded-full p-1' href='https://t.me/mhmystery'><FaTwitter className='w-5 h-5' /></a> 
          </div>
          </div>
        </div>
        <div className='md:mt-[64px] md:ml-32 w-96'><img className='rounded-full' src={photo} alt='my-photo'/>      
        </div>
        </div>
        <div className='grid grid-cols-3 md:grid-cols-4  justify-between text-start text-gray-300 ml-[-50px] md:ml-0 mt-12 md:mt-16 my-12 gap-12 '>
          <div className='flex gap-2 mx-auto  md:mx-0 items-center w-10 '>
            <h1 className='text-5xl'>4</h1>
            <p className='text-sm'>years of studying</p>
          </div>
          <div className='flex mx-auto md:mx-0  gap-2 items-center w-10 '>
            <h1 className='text-5xl font-sm'> 3</h1>
            <p className='text-sm'>involved projects</p>          
            </div>
          <div className='flex gap-2 mx-auto md:mx-0  items-center w-10'>
            <h1 className='text-5xl font-medium'>5</h1>
            <p className='text-sm'>Technologies learned</p>
          </div>
          <div className='flex gap-2 mx-auto md:mx-0  items-center w-10'>
            <h1 className='text-5xl font-medium'>1</h1>
            <p className='text-sm'>Degree in Software Engineering</p>
          </div>
          
        </div>
        




    </div>
  )
}

export default Hero
