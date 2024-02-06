import { useState } from "react";


function Navigation() {
  let [time, setTime] = useState()

  function getTime() {
    const newTime = new Date().toLocaleString();
    setTime(newTime)
  }

  setInterval(() => {
    getTime()
  }, 1000);

  return (
    <nav className="navigation-bar fixed flex flex-row justify-around bg-gradient-to-r from-violet-700 to-fuchsia-600 text-white py-2 shadow-md shadow-violet-700 md:text-lg sm:text-md text-xs min-w-full" >
      <div>
        <a href="#about"><h4 className="text-white text-shadow hover:scale-110 hover:text-black hover:underline transition-transform mt-1">About Me</h4></a>
      </div>
      <div>
        <a href="#tech"><h4 className="text-white text-shadow hover:scale-110 hover:text-black hover:underline transition-transform mt-1">Tech Stack</h4></a>
      </div>
      <div>
        <a href="/"><h4 className="text-white text-shadow hover:scale-110 hover:text-black hover:underline transition-transform mt-1">Projects</h4></a>
      </div>
      <div>
        <a href="/"><h4 className="text-white text-shadow hover:scale-110 hover:text-black hover:underline transition-transform mt-1">Contact</h4></a>
      </div>
      <div>
        <h6 className="text-white text-shadow mt-0.5 m-0 mt-1">{time}</h6>
      </div>
    </nav>
  )
}

export default Navigation;