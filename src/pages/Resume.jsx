import React, { useState } from 'react';

function Resume() {
  const [activeSection, setActiveSection] = useState("experience");

  const renderContent = () => {
    switch (activeSection) {
      case "experience":
        return (
          
          <div className='col-span-2  h-svh flex flex-col '> 
          <h1 className='font-bold text-xl mb-2'>My experience</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni commodi voluptas sequi.</p>
          <div className='grid md:grid-cols-2 gap-8 mt-8 '>
            <div className=' flex flex-col  gap-2 bg-gray-800 p-8 transform transition duration-300 hover:scale-105'>
              
              <p className='text-sm text-[#25F09F]'>2022-present</p>
              <p className='mb-4'>Full Dtack Developer</p>
              <li className='list-disc list-inside'> Tech Solutions Inc.</li>
            </div>
            <div className=' flex flex-col  gap-2 bg-gray-800 p-4 transform transition duration-300 hover:scale-105'>
              <p className='text-sm text-[#25F09F]'>2022-present</p>
              <p className='mb-4'>Full Dtack Developer</p>
              <li className='list-disc list-inside'> Tech Solutions Inc.</li>
            </div>
            <div className=' flex flex-col  gap-2 bg-gray-800 p-8 transform transition duration-300 hover:scale-105'>
              <p className='text-sm text-[#25F09F]'>2022-present</p>
              <p className='mb-4'>Full Dtack Developer</p>
              <li className='list-disc list-inside'> Tech Solutions Inc.</li>
            </div>
            <div className=' flex flex-col  gap-2 bg-gray-800 p-8 transform transition duration-300 hover:scale-105'>
              <p className='text-sm text-[#25F09F]'>2022-present</p>
              <p className='mb-4'>Full Dtack Developer</p>
              <li className='list-disc list-inside'> Tech Solutions Inc.</li>
            </div>

          </div>
      </div>
        );
      case "education":
        return (
          <div>
            <h1 className="font-bold text-xl mb-2">My Education</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, nostrum.</p>
            <div className="bg-gray-900 p-8">
              <p className="text-sm text-[#25F09F]">2018-2022</p>
              <p className="mb-4">Bachelor of Computer Science</p>
              <li className="list-disc list-inside">University of Technology</li>
            </div>
          </div>
        );
      case "skills":
        return (
          <div>
            <h1 className="font-bold text-xl mb-2">My Skills</h1>
            <ul className="list-disc list-inside">
              <li>JavaScript</li>
              <li>React</li>
              <li>Node.js</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
        );
      case "about":
        return (
          <div>
            <h1 className="font-bold text-xl mb-2">About Me</h1>
            <p>I am just a newbie so chill</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="mx-auto mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3 mx-auto md:mx-8 text-white mt-12 gap-8">
        <div className="flex flex-col">
          <h1 className="text-xl">Why Hire Me?</h1>
          <p className="my-8">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
          <div className="flex flex-col mt-2 gap-2 text-[#000300]">
            <button 
              className={`text-[#777] text-lg px-16 rounded-md py-2 ${activeSection === "experience" ? "bg-[#25F09F]" : "bg-gray-800 hover:bg-[#25F09F]"}`} 
              onClick={() => setActiveSection("experience")}
            >
              Experience
            </button>
            <button 
              className={`px-16 text-[#777] text-lg rounded-md py-2 ${activeSection === "education" ? "bg-[#25F09F]" : "bg-gray-800 hover:bg-[#25F09F]"}`} 
              onClick={() => setActiveSection("education")}
            >
              Education
            </button>
            <button 
              className={`text-[#777] text-lg px-16 rounded-md py-2 ${activeSection === "skills" ? "bg-[#356c56]" : "bg-gray-800 hover:bg-[#25F09F]"}`} 
              onClick={() => setActiveSection("skills")}
            >
              Skills
            </button>
            <button 
              className={`text-[#777] text-lg px-16 rounded-md py-2 ${activeSection === "about" ? "bg-[#25F09F]" : "bg-gray-800 hover:bg-[#25F09F]"}`} 
              onClick={() => setActiveSection("about")}
            >
              About Me
            </button>
          </div>
        </div>
        <div className=" col-span-2 flex flex-col  ">
          {renderContent()}
        </div>
      </div>
    </div>
  );
}

export default Resume;
