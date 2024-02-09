import simonSays from "../simon-says.png"
import modernPage from "../modern-page.png"

function Projects() {
  return(
    <main className="project-wrapper mt-20" id="projects">
      <h1 className=" text-center md:text-4xl text-2xl font-bold mb-10 text-shadow-small-white">My Projects 🧑🏻‍💻</h1>
      <div className="flex flex-col">
        <div className="secondary flex flex-col md:justify-evenly mb-10 p-4 md:max-w-5xl rounded-2xl accent mx-auto mt-5 sm:flex-row">
          <div className="project-hero">
          <h1 className="text-center md:text-2xl text-lg font-bold mb-3 mt-3 underline text-shadow-small">Simon Says Game</h1>
          <a href="https://github.com/TPlatts04/Simon-Says-Game" target="_blank" rel="noreferrer"><img src={simonSays} alt="Simon Says Project" className="md:max-w-lg rounded-xl shadow-black shadow-lg cursor-pointer hover:scale-105 transition-transform min-w-sm mx-auto mb-5 shrink" title="Simon Says Repository" /></a>
          </div>
          <div className="project-description my-auto ml-5">
            <p className="md:max-w-xl md:text-xl text-shadow-small text-md">Here is a basic game of <span className="font-bold underline">Simon Says</span> with buttons, i have implemented a start/restart button for the <span className="font-bold underline capitalize">mobile/touch-device</span> users as they are <span className="font-bold uppercase">not</span> able to press a key to start like the desktop users. This project was made mostly with JavaScript, Jquery, HTML and CSS. <a href="https://tplatts04.github.io/Simon-Says-Game/" rel="noreferrer" target="_blank" className=" hover:text-shadow underline font-bold ">Click here</a> to view the project live, and click the image to view the repository for the project.</p>
          </div>
        </div>
        <div className="secondary flex flex-col md:justify-evenly mb-10 p-4 md:max-w-5xl rounded-2xl accent mx-auto mt-5 sm:flex-row">
          <div className="project-hero">
          <h1 className="text-center md:text-2xl text-lg font-bold mb-3 mt-3 underline text-shadow-small">Modern Landing Page</h1>
          <a href="https://github.com/TPlatts04/Modern-Landing-Page" target="_blank" rel="noreferrer"><img src={modernPage} alt="Modern Landing Page Project" className="md:max-w-lg rounded-xl shadow-black shadow-lg cursor-pointer hover:scale-105 transition-transform min-w-sm mx-auto mb-5" title="Modern Landing Page Repository" /></a>
          </div>
          <div className="project-description my-auto ml-5">
            <p className="md:max-w-xl md:text-xl text-md text-shadow-small">This is a project which i decided to create and spend days on. This is a Modern Landing Page (<span className="font-bold">MOCK</span>) for a banking company who are just starting and needed a modernised landing page for their business. This "Application" offers the user to add multipel cards and pay for different subscriptions based on what features they would like. This is a <span className="uppercase font-bold underline">premium</span> application so it will not be free to their target market. <a href="https://tplatts04.github.io/Modern-Landing-Page/" rel="noreferrer" target="_blank" className="hover:text-indigo-700 hover:text-shadow underline font-bold ">Click here</a> to view the project live, and click the image to view the repository for the project.</p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Projects;