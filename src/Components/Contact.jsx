import Astronaut from "../Astronaut.png"

function Contact() {

  return (
    <main className="pb-16" id="contact">
      <div>
        <h1 className="text-white text-center md:text-4xl text-2xl mt-10 font-semibold text-shadow-small-white">Contact Me 📞</h1>
        <div className="flex lg:flex-row flex-col justify-center">
          <form action="https://formsubmit.co/tomplattsbse@hotmail.com" method="POST" className="flex flex-col mt-10 lg:ml-auto self-center" autoComplete="off">
            <input type="hidden" name="_captcha" value="false"/>
            <div className="mx-auto mb-10">
              <input type="text" name="name" placeholder="Name" required className="font-bold py-4 px-5 md:text-2xl text-lg rounded-2xl focus:border focus:border-white focus:shadow-lg focus:shadow-white transition-shadow bg-gradient-to-r from-indigo-700 to-fuchsia-700 text-white"/>
            </div>
            <div className="mx-auto mb-10">
              <input type="email" name="email" id="email" placeholder="Email Address" required className="font-bold py-4 px-5 md:text-2xl text-lg rounded-2xl focus:border focus:border-white focus:shadow-lg focus:shadow-white transition-shadow bg-gradient-to-r from-indigo-700 to-fuchsia-700 text-white"/>
            </div>
            <div className="mx-auto mb-10">
              <textarea name="message" cols="23" rows="10" placeholder="Your Message" className="message font-bold p-4 md:text-2xl text-lg rounded-2xl focus:border focus:border-white focus:shadow-lg focus:shadow-white transition-shadow bg-gradient-to-r from-indigo-700 to-fuchsia-700 text-white resize-none overflow-y-"></textarea>
            </div>
            <div className="mx-auto">
              <button type="submit" className="text-white bg-gradient-to-l from-indigo-700 to-fuchsia-700 p-5 md:text-3xl text-2xl rounded-xl hover:shadow-md hover:shadow-white hover:scale-105 transition-transform">Blast Off 🚀</button>
            </div>
          </form>
          <img src={Astronaut} alt="Astronaut" className="w-96 h-96 lg:my-auto lg:ml-10 md:block hidden mx-auto mt-10"/>
        </div>
      </div>
    </main>
  )
}

export default Contact;