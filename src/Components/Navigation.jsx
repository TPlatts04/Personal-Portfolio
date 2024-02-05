function Navigation() {
  return (
    <nav className="sticky flex flex-row justify-around bg-gradient-to-r from-violet-700 to-fuchsia-600 text-white py-2 shadow-md shadow-violet-700" >
      <div>
        <a href="#about"><h4 className="text-white text-shadow hover:scale-110 hover:text-black hover:underline transition-transform">About Me</h4></a>
      </div>
      <div>
        <a href="/"><h4 className="text-white text-shadow hover:scale-110 hover:text-black hover:underline transition-transform">Projects</h4></a>
      </div>
      <div>
        <a href="/"><h4 className="text-white text-shadow hover:scale-110 hover:text-black hover:underline transition-transform">Contact</h4></a>
      </div>
    </nav>
  )
}

export default Navigation;