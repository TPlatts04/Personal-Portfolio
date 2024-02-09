import profile from "../profile-picture.jpg"

function About() {
  return (
    <main className="about-wrapper md:justify-center flex md:flex-row flex-col-reverse md:pt-14" id="about"> 
      <div className="secondary md:max-w-xl md:ml-6 md:mt-10 md:mr-20 md:pt-5 mx-auto text-center rounded-lg accent max-w-lg mt-14">
        <h1 className="font-bold mb-1 pb-4 text-2xl">About Me</h1>
        <p className="text-lg px-3 pb-2">Hello, my name is Thomas Platts. I am an aspiring Front-End Developer who is self-taught and always keeping up to date with the new technologies that the programming world has to offer. I was born and raised in Birmingham, UK and decided to get into Web Development since Nov. 2023. What got me into programming was my natural skills of being a great problem solver but also an efficient learner. Hope you enjoy my portfolio, feel free to contact me with any queries!</p>
      </div>
      <div>
        <a target="_blank" rel="noreferrer" href="https://www.github.com/tplatts04" className="my-auto"><img src={profile} alt="Profile img" className="md:min-w-52 md:mt-20 rounded-3xl border-4 border-white w-52 mx-auto hover:accent lg:min-w-80 lg:mt-12 transition-shadow" /></a>
      </div>
      <div className="md:absolute mx-auto mb-20 md:mt-96 pt-5">
        <a href="https://www.github.com/tplatts04" target="_blank" rel="noreferrer"><i class="fa-brands fa-github text-5xl mr-5 cursor-pointer hover:scale-110 transition-transform"></i></a>
        <a href="https://www.linkedin.com/in/thomas-platts-0608a1256/" target="_blank" rel="noreferrer"><i class="fa-brands fa-linkedin  text-5xl cursor-pointer hover:scale-110 transition-transform"></i></a>
      </div>
    </main>
  )
}

export default About;