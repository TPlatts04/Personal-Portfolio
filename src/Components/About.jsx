import profile from "../profile-picture.jpg"

function About() {
  return (
    <main className="about-wrapper flex justify-center md:flex-row flex-col-reverse" id="about">
      <div className="bg-white md:w-80 md:ml-20 md:mt-10 md:mx-40 md:pt-5 text-center rounded-lg shadow-lg shadow-white max-w-80 mx-auto mt-14">
        <h1 className="font-bold mb-1 pb-4">About Me</h1>
        <p className="text-xs px-3 pb-2">Hello, my name is Thomas Platts. I am an aspiring Front-End Developer who is self-taught and always keeping up to date with the new technologies that the programming world has to offer. I was born and raised in Birmingham, UK and decided to get into Web Development since Nov. 2023. What got me into programming was my natural skills of being a great problem solver but also an efficient learner. Hope you enjoy my portfolio, feel free to contact me with any queries!</p>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="https://www.github.com/tplatts04"><img src={profile} alt="Profile img" className="md:w-52 md:mt-16 rounded-3xl border-4 border-white w-52 mx-auto mt-5 hover:shadow-lg hover:shadow-indigo-600 transition-shadow" /></a>
      </div>
    </main>
  )
}

export default About;