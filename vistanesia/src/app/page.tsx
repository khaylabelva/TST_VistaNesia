'use client';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const handleLoginClick = () => {
    router.push('/login');
  };

  return (
    <div className="relative">
      {/* Page 1 */}
      <div className="relative h-screen snap-start">
        <div className="absolute inset-0">
          <img
            src="/background.jpg"
            alt="Background"
            className="w-full h-full object-cover"
          />
        </div>
        <nav className="absolute top-6 left-0 w-full flex items-center justify-between px-8">
          <div className="font-bold text-lg text-white">VISTANESIA</div>
          <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-gray-300/50 px-10 py-2 rounded-full flex gap-12 justify-center items-center border border-white">
            <a href="#about" className="text-white text-sm font-medium hover:text-gray-900 transition-all duration-300 ease-in-out">
              About
            </a>
            <a href="#tour" className="text-white text-sm font-medium hover:text-gray-900 transition-all duration-300 ease-in-out">
              Tour
            </a>
            <a href="#services" className="text-white text-sm font-medium hover:text-gray-900 transition-all duration-300 ease-in-out">
              Services
            </a>
            <a href="#contact" className="text-white text-sm font-medium hover:text-gray-900 transition-all duration-300 ease-in-out">
              Contact
            </a>
          </div>
          <button
            onClick={handleLoginClick}
            className="bg-white text-black text-sm px-6 py-2 rounded-full shadow-md z-50 
              hover:bg-black hover:text-white hover:shadow-lg 
              transition-all duration-300 ease-in-out"
          >
            Login
          </button>
        </nav>
        <div className="relative h-full flex flex-col justify-center items-center text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl mt-20 font-extrabold leading-tight">
            Extraordinary Natural <br /> and Cultural Charm
          </h1>
          <p className="mt-4 text-lg text-white">
            Exploring Indonesia is an unforgettable adventure
          </p>
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
      <div className="relative pt-20 pb-10 bg-gray-100 snap-start flex flex-col items-center">
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
      <div className="relative pt-20 pb-14 bg-gray-100 snap-start flex flex-col md:flex-row items-center px-12 md:px-28">
        <div className="relative w-full md:w-[45%] lg:w-[38%] mx-auto">
          <img
            src="/image.jpg"
            alt="Exploration"
            className="rounded-xl shadow-lg object-cover w-full h-[80vh]"
          />
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-[90%] bg-gray-500/60 py-2 px-5 rounded-full mx-auto border border-white">
            <div className="flex gap-3 items-center">
              <select className="bg-transparent text-white text-xs border border-gray-300 rounded-md py-0.5 px-1.5 focus:ring-2 focus:ring-gray-500 w-full pointer-events-none">
                <option>Location</option>
              </select>
              <select className="bg-transparent text-white text-xs border border-gray-300 rounded-md py-0.5 px-1.5 focus:ring-2 focus:ring-gray-500 w-full pointer-events-none">
                <option>Category</option>
              </select>
              <select className="bg-transparent text-white text-xs border border-gray-300 rounded-md py-0.5 px-1.5 focus:ring-2 focus:ring-gray-500 w-full pointer-events-none">
                <option>Cost</option>
              </select>
              <button className="bg-black text-white text-xs px-4 py-1.5 rounded-md shadow-md pointer-events-none">
                Search
              </button>
            </div>
          </div>
          <p className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-[90%] text-xs text-gray-100 px-1 py-3 text-justify">
            Embark on a journey to find your dream destination, where adventure and
            relaxation await, creating unforgettable memories along the way.
          </p>
        </div>
        <div className="w-full md:w-1/2 px-5">
          <h3 className="text-gray-600 mb-2">How it works</h3>
          <h2 className="text-3xl font-bold text-gray-800 mb-8">One click for you</h2>
          <div className="space-y-6">
            {[
              {
                title: "Define Your Journey",
                description:
                  "Find your perfect trip by entering location, budget, and preferred travel type.",
                icon: "/location.png",
              },
              {
                title: "Plan Within Your Budget",
                description:
                  "Explore destinations that align with your budget for a seamless adventure.",
                icon: "/money.png",
              },
              {
                title: "Discover Tailored Adventures",
                description:
                  "Choose your ideal travel category and unlock unforgettable experiences.",
                icon: "/world.png",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group flex items-center gap-7 bg-white p-4 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl hover:bg-stone-50"
              >
                <div className="w-14 h-14">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-full h-full object-contain ml-2 group-hover:rotate-12 transition-transform duration-300"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 group-hover:text-black transition-colors duration-300">
                    {item.title}
                  </h4>
                  <p className="text-gray-600 text-sm group-hover:text-gray-800 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}