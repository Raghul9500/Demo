export default function Mainpages() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1120] via-[#0f1b35] to-black text-white py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Background Glow Effect */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-blue-600 opacity-20 blur-3xl rounded-full"></div>
      </div>

      {/* Container */}
      <div className="relative max-w-6xl mx-auto">
        {/* TOP HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-500 mb-4 md:mb-6">
            About Us
          </h1>
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Know Details About Our <br /> Company
          </h2>
          <p className="text-gray-400 leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus.
          </p>
        </div>

        {/* ABOUT CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* LEFT SIDE IMAGES */}
          <div className="relative w-full flex justify-center md:justify-start mb-10 md:mb-0">
            {/* Small Image */}
            <img
              src="/image/picture-2.webp"
              alt="secondary"
              className="w-[250px] md:w-[350px] rounded-l shadow-xl absolute md:left-8 bottom-0 z-10"
            />
            {/* Big Image */}
            <img
              src="/image/picture-1.webp"
              alt="main"
              className="w-[300px] md:w-[350px] rounded-l shadow-2xl relative z-20 md:ml-24 mt-10"
            />
          </div>

          {/* RIGHT SIDE CONTENT */}
          <div>
            <h3 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6 leading-tight">
              DB, Auth, Stripe, Sanity, <br /> and More
            </h3>

            <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
              accumsan ultricies.
            </p>

            <p className="text-gray-400 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis
              nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
            </p>

            <p className="text-gray-400 leading-relaxed text-sm md:text-base">
              Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis
              nulla. Sed venenatis auctor dolor.
            </p>
          </div>
        </div>

        {/* TEAM SECTION */}
        <div className="text-center max-w-3xl mx-auto mt-16 md:mt-20">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Meet With Our Creative <br /> Dedicated Team
          </h2>
          <p className="text-gray-400 leading-relaxed mb-8 md:mb-12 text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In
            convallis tortor eros. Donec vitae tortor lacus.
          </p>
        </div>

        {/* 3 IMAGE GRID */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="text-center">
              <img
                src="/image/image-1.webp"
                alt="image1"
                className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition duration-300"
              />
              <h3 className="text-lg md:text-xl font-bold mt-2">
                Olivia Andrium
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Project Manager
              </p>
            </div>

            <div className="text-center overflow-hidden rounded-xl">
              <img
                src="/image/image-3.webp"
                alt="image2"
                className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition duration-300"
              />
              <h3 className="text-lg md:text-xl font-bold mt-2">
                Jemse Kemorun
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Frontend Developer
              </p>
            </div>

            <div className="text-center overflow-hidden rounded-xl">
              <img
                src="/image/image-4.webp"
                alt="image3"
                className="w-full h-[250px] md:h-[350px] object-cover hover:scale-105 transition duration-300"
              />
              <h3 className="text-lg md:text-xl font-bold mt-2">
                Avi Pestarica
              </h3>
              <p className="text-gray-400 text-xs md:text-sm">
                Product Designer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
