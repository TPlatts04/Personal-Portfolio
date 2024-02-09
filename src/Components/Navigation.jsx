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
    <nav className="navigation-bar fixed flex flex-row justify-around primary py-2 accent md:text-lg sm:text-md text-xs min-w-full gap-x-2 p-2" >
      <div>
        <a href="#about"><h4 className=" text-shadow hover:scale-110 hover:underline transition-transform mt-1">About Me</h4></a>
      </div>
      <div>
        <a href="#tech"><h4 className=" text-shadow hover:scale-110 hover:underline transition-transform mt-1">Tech Stack</h4></a>
      </div>
      <div>
        <a href="#projects"><h4 className=" text-shadow hover:scale-110 hover:underline transition-transform mt-1">Projects</h4></a>
      </div>
      <div>
        <a href="#contact"><h4 className=" text-shadow hover:scale-110 hover:underline transition-transform mt-1">Contact</h4></a>
      </div>
      <div>
        <h6 className=" text-shadow mt-0.5 m-0 mt-1">{time}</h6>
      </div>
    </nav>
  )
}

export default Navigation;