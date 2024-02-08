import Navigation from "./Navigation";
import About from "./About";
import Tech from "./TechStack";
import Projects from "./Projects";

function App() {
  return (
    <div className="App md:scroll-smooth min-h-svh bg-black">
      <Navigation />
      <About />
      <hr className="mt-52 border-4 border-dotted border-t-0 w-1/2 border-indigo-700 mx-auto"/>
      <Tech />
      <hr className="mt-20 border-4 border-dotted border-t-0 w-1/2 border-indigo-700 mx-auto"/>
      <Projects />
    </div>
  );
}

export default App;
