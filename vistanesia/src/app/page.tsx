export default function Home() {
  return (
    <div className="relative h-screen">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/background.jpg"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Navbar */}
      <nav className="absolute top-6 left-0 w-full flex items-center justify-between px-8">
        {/* Logo */}
        <div className="font-bold text-lg text-white">INDOTRAVI</div>

        {/* Menu Items (Wrapped in Transparent Box) */}
        <div className="bg-gray-300/50 px-10 py-2 rounded-full flex gap-12 justify-center items-center mx-auto border border-white">
          <a href="#about" className="text-white text-sm font-medium hover:text-gray-300">
            About
          </a>
          <a href="#services" className="text-white text-sm font-medium hover:text-gray-300">
            Services
          </a>
          <a href="#tour" className="text-white text-sm font-medium hover:text-gray-300">
            Tour
          </a>
          <a href="#about2" className="text-white text-sm font-medium hover:text-gray-300">
            About
          </a>
          <a href="#contact" className="text-white text-sm font-medium hover:text-gray-300">
            Contact
          </a>
        </div>

        {/* Login Button */}
        <button className="bg-white text-black text-sm px-5 py-2 rounded-full shadow-md hover:bg-blue-700">
          Login
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative flex flex-col justify-center items-center text-center h-full text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          Extraordinary natural and <br /> cultural charm
        </h1>
        <p className="mt-4 text-lg text-white">
          Exploring Indonesia is an unforgettable adventure.
        </p>

        {/* Search Bar */}
        <div className="mt-8 bg-white/80 backdrop-blur-md px-8 py-4 rounded-lg shadow-lg flex items-center gap-4">
          <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 outline-none">
            <option>Date</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 outline-none">
            <option>Budget</option>
          </select>
          <select className="border border-gray-300 rounded-md px-4 py-2 text-gray-700 outline-none">
            <option>Guest</option>
          </select>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-700">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}
