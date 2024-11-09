// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero"
// import Services from "./pages/Services"
// import { createBrowserRouter,RouterProvider } from 'react-router-dom';
// function App() {
//   return (
//     <div className='max-w-[1240px] md:mx-auto mx-8 my-8'>
      
//       <Navbar/>
      
//       <Hero/>  
      
//         </div>
//   );
// }

// export default App;

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./pages/Services";  
import { createBrowserRouter, RouterProvider } from 'react-router-dom';  // Import required routing components
import Resume from "./pages/Resume";

// Create your routes using createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",       // Root path
    element: (
      <div className='max-w-[1240px] md:mx-auto mx-8 my-8'>
        <Navbar />
        <Hero />
      </div>
    ),
  },
  {
    path: "/services",  // Path for the Services page
    element: (
      <div className='max-w-[1240px] md:mx-auto mx-8 my-8'>
        <Navbar />      {/* Navbar remains the same on every page */}
        <Services />    {/* Render Services page */}
      </div>
    ),
  },
  {
    path: "/resume",  // Path for the Services page
    element: (
      <div className='max-w-[1240px] md:mx-auto mx-8 my-8'>
        <Navbar />      {/* Navbar remains the same on every page */}
        <Resume />    {/* Render Services page */}
      </div>
    ),
  },
]);

function App() {
  return (
    <RouterProvider router={router} />  // Use RouterProvider to provide routes
  );
}

export default App;
