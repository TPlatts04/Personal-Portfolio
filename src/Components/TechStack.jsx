function Tech() {
  return (
    <main className="tech-wrapper" id="tech">
      <h1 className="text-shadow-small-white md:text-4xl text-2xl font-bold text-center mt-12 mb-20 underline">My Tech Stack 🖥️</h1>
      <div className="flex-wrapper flex md:flex-row flex-col">
        <div className="techstack max-w-96 secondary p-10 accent rounded-xl flex flex-col justify-center md:ml-auto md:text-left self-center text-center">
          <div className="text-center mb-4">
            <h1 className="underline md:text-3xl text-2xl font-light md:mb-10 mb-4 mt-4">My Current Tech Stack</h1>
          </div>
          <div className="flex md:flex-row md:justify-center flex-col gap-4">
            <ul className="md:pb-4 font-semibold md:text-2xl text-xl flex flex-col mx-auto">
              <a href="https://developer.mozilla.org/en-US/docs/Web/HTML" rel="noreferrer" target="_blank"><li className="mb-2 text-shadow-small hover-underline-animation">HTML5</li></a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/CSS" rel="noreferrer" target="_blank"><li className="mb-2 text-shadow-small hover-underline-animation">CSS</li></a>
              <a href="https://developer.mozilla.org/en-US/docs/Web/javascript" rel="noreferrer" target="_blank"><li className="mb-2 text-shadow-small hover-underline-animation">JavaScript</li></a>
              <a href="https://api.jquery.com/" rel="noreferrer" target="_blank"><li className="mb-2 text-shadow-small hover-underline-animation">Jquery</li></a>
              <a href="https://tailwindcss.com/docs/installation" rel="noreferrer" target="_blank"><li className="text-shadow-small hover-underline-animation mb-2">TailwindCSS</li></a>
              <a href="https://nodejs.org/docs/latest/api/" rel="noreferrer" target="_blank"><li className="text-shadow-small hover-underline-animation">Node.js</li></a>
            </ul>
            <ul className="md:ml-7 pb-4 font-semibold md:text-2xl text-xl flex flex-col mx-auto">
              <a href="https://getbootstrap.com/docs/5.3/getting-started/introduction/" rel="noreferrer" target="_blank"><li className="mb-2 text-shadow-small hover-underline-animation">BootStrap</li></a>
              <a href="https://git-scm.com/docs" rel="noreferrer" target="_blank"><li className="mb-2 text-shadow-small hover-underline-animation">Git & GitHub</li></a>
              <a href="https://react.dev/learn" rel="noreferrer" target="_blank"><li className="mb-2 text-shadow-small hover-underline-animation">React.js</li></a>
              <li className="mb-2 text-shadow-small hover-underline-animation">Mobile-First</li>
              <li className="text-shadow-small hover-underline-animation">REST APIs</li>
            </ul>
          </div>
        </div>
        <div className="secondary rounded-xl accent max-w-xl md:mr-auto md:ml-24 md:my-auto mx-auto mt-20">
          <p className="md:text-2xl sm:text-xl text-lg font-light p-4">I am forever expanding my knowledge within the Web Development field. I have taught myself using multiple resources such as: freeCodeCamp, YouTube and partly the Odin Project. These resources have been useful within my ladder of development, and therefore i feel confident i can produce strong websites for anyone and provide them with adequate code.</p>
        </div>
        </div>
    </main>
  )
}

export default Tech;