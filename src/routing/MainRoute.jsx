import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Navbar from "../components/Navbar"; 
import Hero from "../components/Hero";
import Services from "../pages/Services";
import Resume from "../pages/Resume";
import Work from "../pages/Work";
import Contact from "../pages/Contact";

// Define routes using JSX
const MainRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <div className="max-w-[1240px] md:mx-auto mx-8 ">
            <Navbar />
            <Hero />
          </div>
        }
      />
      <Route
        path="/services"
        element={
          <div className="max-w-[1240px] md:mx-auto mx-8 ">
            <Navbar />
            <Services />
          </div>
        }
      />
      <Route
        path="/resume"
        element={
          <div className="max-w-[1240px] md:mx-auto mx-8 ">
            <Navbar />
            <Resume />
          </div>
        }
      />
      <Route 
        path="/Work"
        element={<div>
            <Navbar/>
            <Work/>
        </div>}
      />
      <Route 
      path="/contact"
      element={<div>
        <Navbar/>
        <Contact/></div>}
      />
    </>
  )
);

export default MainRouter;
