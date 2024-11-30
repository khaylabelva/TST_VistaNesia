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
            Extraordinary natural and <br /> cultural charm
          </h1>
          <p className="mt-4 text-lg text-white">
            Exploring Indonesia is an unforgettable adventure.
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
      <div className="relative pt-28 pb-5 bg-white snap-start flex flex-col items-center">
      <div className="flex flex-col md:flex-row md:justify-between w-full px-6 md:px-40 mb-10 md:gap-x-4">
        {/* Judul di sebelah kiri */}
        <h2 className="text-3xl font-bold text-gray-800 md:mb-0">
          Indonesian Tourism
        </h2>

        {/* Paragraf di sebelah kanan */}
        <p className="text-gray-600 md:text-left">
          Extraordinary natural beauty, enjoy the rich culture, <br /> and experience the friendliness of the local people.
        </p>
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
              title: "Ulun Danu",
              location: "Tabanan, Bali",
              image: "/bali.jpg",
              classes: "col-span-4 md:col-span-1",
            },
            {
              title: "Raja Ampat",
              location: "Raja Ampat, Papua",
              image: "/rajaampat.jpg",
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
    </div>
  );
}