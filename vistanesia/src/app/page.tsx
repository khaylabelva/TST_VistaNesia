export default function Home() {
  return (
    <div className="relative">
      {/* Page 1 */}
      <div className="relative h-screen snap-start">
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
          <div className="font-bold text-lg text-white">VISTANESIA</div>
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
            <a href="#contact" className="text-white text-sm font-medium hover:text-gray-300">
              Contact
            </a>
          </div>
          <button className="bg-white text-black text-sm px-5 py-2 rounded-full shadow-md">
            Login
          </button>
        </nav>

        {/* Main Content */}
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl mt-20 font-extrabold leading-tight">
            Extraordinary Natural <br /> and Cultural Charm
          </h1>
          <p className="mt-4 text-lg text-white">
            Exploring Indonesia is an unforgettable adventure
          </p>

          {/* Info Cards */}
          <div className="mt-10 flex justify-center gap-10 flex-wrap">
            {[ 
              { value: "5.0", label: "Average Rating" }, 
              { value: "12K", label: "Total Destinations" }, 
              { value: "10M+", label: "Total Customers" },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white px-10 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <h2 className="text-2xl font-bold text-black">{card.value}</h2>
                <p className="text-gray-600 text-sm font-medium mt-1">{card.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Page 2 */}
      <div className="relative pt-20 pb-10 bg-white snap-start flex flex-col items-center">
        <div className="w-full px-6 md:px-40 mb-10">
          <div className="text-gray-600 mb-2">
            Best Location
          </div>
          <div className="flex flex-col md:flex-row md:justify-between md:items-center md:gap-x-4">
            <h2 className="text-3xl font-bold text-gray-800 md:mb-0">
              Indonesian Tourism
            </h2>
            <p className="text-gray-600 md:text-left">
              Extraordinary natural beauty, enjoy the rich culture, <br />
              and experience the friendliness of the local people.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 px-6 md:px-20">
          {[
            {
              title: "Borobudur Temple",
              location: "Jogjakarta, Central Java",
              image: "/borobudur.jpg",
              classes: "col-span-4 md:col-span-3",
            },
            {
              title: "Raja Ampat",
              location: "Raja Ampat, Papua",
              image: "/rajaampat.jpg",
              classes: "col-span-4 md:col-span-1",
            },
            {
              title: "Ulun Danu",
              location: "Tabanan, Bali",
              image: "/bali.jpg",
              classes: "col-span-4 md:col-span-1",
            },
            {
              title: "Sengkedan Perkebunan Teh",
              location: "Rancabali, West Java",
              image: "/bandung.jpg",
              classes: "col-span-4 md:col-span-3",
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`relative rounded-lg overflow-hidden shadow-xl transition-all duration-300 ${item.classes}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-52 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4 text-white">
                <p className="text-sm text-gray-300">{item.location}</p>
                <h3 className="text-lg font-bold mt-1">{item.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Page 3 */}
        <div className="relative pt-20 pb-10 bg-white snap-start flex flex-col md:flex-row items-center px-6 md:px-20 gap-10">
          {/* Gambar di sebelah kiri */}
          <div className="relative w-full md:w-1/2 max-h-screen">
            <img
              src="/image.jpg"
              alt="Exploration"
              className="rounded-xl shadow-lg object-cover max-w-[80vh] max-h-[80vh]"
            />
            {/* Overlay konten di bawah gambar */}
            <div className="absolute bottom-6 left-6 bg-white/80 backdrop-blur-md p-4 rounded-lg shadow-md flex gap-4 items-center">
              <select className="bg-transparent text-gray-700 text-sm border-none focus:ring-0">
                <option>Date</option>
              </select>
              <select className="bg-transparent text-gray-700 text-sm border-none focus:ring-0">
                <option>Budget</option>
              </select>
              <select className="bg-transparent text-gray-700 text-sm border-none focus:ring-0">
                <option>Guest</option>
              </select>
              <button className="bg-black text-white text-sm px-4 py-2 rounded-lg shadow-md hover:bg-gray-800">
                Search
              </button>
            </div>
            {/* Caption di bawah gambar */}
            <p className="mt-4 text-sm text-gray-600">
              Embark on a journey to find your dream destination, where adventure and relaxation await, creating unforgettable memories along the way.
            </p>
          </div>

          {/* Konten di sebelah kanan */}
          <div className="w-full md:w-1/2">
            <h3 className="text-gray-400 text-sm font-medium mb-2">How it works</h3>
            <h2 className="text-3xl font-bold text-gray-800 mb-8">One click for you</h2>
            <div className="space-y-6">
              {[
                {
                  title: "Find your destination",
                  description:
                    "Embark on a journey to discover your dream destination, where adventure and relaxation await.",
                  icon: "🔍",
                },
                {
                  title: "Book a ticket",
                  description:
                    "Ensure a smooth travel experience by booking tickets to your preferred destination via our booking platform.",
                  icon: "✈️",
                },
                {
                  title: "Make payment",
                  description:
                    "We offer a variety of payment options to meet your preferences and ensure a hassle-free transaction process.",
                  icon: "💳",
                },
                {
                  title: "Explore destination",
                  description:
                    "You'll be immersed in a captivating tapestry of sights, sounds and tastes, as you wind your way through the ancient streets.",
                  icon: "🗺️",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  {/* Icon */}
                  <div className="text-xl">{item.icon}</div>
                  {/* Text */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
    </div>
  );
}