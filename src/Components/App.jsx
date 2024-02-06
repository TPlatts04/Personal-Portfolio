import Navigation from "./Navigation";
import About from "./About";
import Tech from "./TechStack";

function App() {
  return (
    <div className="App md:scroll-smooth min-h-svh bg-black">
      <Navigation />
      <About />
      <hr className="mt-52 border-4 border-dotted border-t-0 w-1/2 border-indigo-700 mx-auto"/>
      <Tech />
    </div>
  );
}

export default App;
