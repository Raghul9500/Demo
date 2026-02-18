import { SignalMedium, Layers, Layout, Gauge } from "lucide-react";

export default function Portfolio() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0b1120] via-[#0f1b35] to-black text-white py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* Background Glow */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-[400px] md:w-[700px] h-[400px] md:h-[700px] bg-black opacity-20 blur-3xl rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        {/* TOP HEADING */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-500 mb-4 md:mb-6">
            Portfolio
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
            Gallery, Previews and <br /> Portfolio
          </h2>

          <p className="text-white font-semibold text-sm md:text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* IMAGE SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="w-full h-[250px] overflow-hidden rounded-xl">
            <img
              src="/image/flower.webp"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-[350px] md:h-[450px] overflow-hidden rounded-xl">
            <img
              src="/image/flower-1.webp"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="w-full h-[250px] overflow-hidden rounded-xl">
            <img
              src="/image/flower-2.webp"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* BUTTON */}
        <div className="flex justify-center mt-10">
          <button className="bg-blue-600 font-bold px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            See More Projects
          </button>
        </div>

        {/* TESTIMONIAL */}
        <div className="text-center max-w-3xl mx-auto mt-16">
          <h1 className="text-4xl md:text-6xl font-bold text-blue-500 mb-4">
            TESTIMONIAL
          </h1>

          <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            What Our Clients Say <br /> About Us
          </h2>

          <p className="font-semibold text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* TESTIMONIAL CONTENT */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-10">
          <h3 className="max-w-md text-sm md:text-base font-semibold text-center md:text-left">
            “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
            condimentum sapien ac leo cursus dignissim.”
          </h3>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/image/image-5.webp"
              className="w-[300px] md:w-[420px] h-auto object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>

        {/* BRANDS SECTION */}
        <div className="text-center max-w-3xl mx-auto mt-20">
          <h1 className="text-4xl md:text-7xl font-bold text-white mb-4">
            Trusted by Global <br /> Brands
          </h1>

          <p className="text-gray-400 text-sm md:text-base font-semibold">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* ICON GRID */}
        <div className="flex flex-wrap justify-center gap-10 mt-16">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
              <SignalMedium size={28} />
            </div>
            <h3 className="text-lg font-semibold">UIdeck</h3>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-blue-600 rounded-full">
              <Layers size={28} />
            </div>
            <h3 className="text-lg font-semibold">Tailadmin</h3>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
              <Layout size={28} />
            </div>
            <h3 className="text-lg font-semibold">Graygrids</h3>
          </div>

          <div className="text-center space-y-4">
            <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
              <Gauge size={28} />
            </div>
            <h3 className="text-lg font-semibold">Lineicon</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
