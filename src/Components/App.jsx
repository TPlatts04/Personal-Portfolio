import Navigation from "./Navigation";
import About from "./About";
import Tech from "./TechStack";
import Projects from "./Projects";
import Contact from "./Contact"
import Footer from "./Footer";
import { useEffect } from "react";

function App() {

  useEffect(() => {
    window.history.scrollRestoration = "manual"
  }, []) // Will reset position to top of page when user refreshes

  return (
    <div className="App md:scroll-smooth min-h-svh bg-black">
      <Navigation />
      <About />
      <hr className="mt-52 border-4 border-dotted border-t-0 w-1/2 border-indigo-700 mx-auto"/>
      <Tech />
      <hr className="mt-20 border-4 border-dotted border-t-0 w-1/2 border-indigo-700 mx-auto"/>
      <Projects />
      <hr className="mt-20 border-4 border-dotted border-t-0 w-1/2 border-indigo-700 mx-auto"/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
