function Footer() {
  return (
    <footer className="mt-20">
      <div className="secondary flex md:flex-row flex-col justify-center py-5 accent">
        <div className="md:mr-20 md:self-center mx-auto">
          <h1>Created By: Thomas Platts</h1>
          <h4>Email: tomplattsbse@hotmail.com</h4>
        </div>
        <div className="mx-auto md:my-auto mt-10">
          <ul className="flex md:flex-row flex-col gap-y-4 md:gap-x-4">
            <li>
              <a href="#about" className="hover:text-accent hover:text-shadow-small hover:underline transition-all font-bold md:text-2xl text-md">About</a>
            </li>
            <li>
              <a href="#tech" className="hover:text-accent hover:text-shadow-small hover:underline transition-all font-bold md:text-2xl text-md">Tech Stack</a>
            </li>
            <li>
              <a href="#projects" className="hover:text-accent hover:text-shadow-small hover:underline transition-all font-bold md:text-2xl text-md">Projects</a>
            </li>
            <li>
              <a href="#contact" className="hover:text-accent hover:text-shadow-small hover:underline transition-all font-bold md:text-2xl text-md">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer;