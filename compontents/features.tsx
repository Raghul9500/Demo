import {
  SignalMedium,
  Layers,
  Layout,
  Gauge,
  Sliders,
  RefreshCcw,
} from "lucide-react";

export default function Mainpages() {
  return (
    <section className="bg-black text-white py-20 md:py-32 px-4 sm:px-6 md:px-12 lg:px-20">
      {/* TOP HEADING */}
      <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
        <h1 className="text-4xl md:text-7xl font-bold text-blue-500 mb-4">
          Features
        </h1>

        <h2 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 leading-tight">
          Essential Integrations <br /> with Modern Design
        </h2>

        <p className="text-gray-400 text-sm md:text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* FEATURE GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-16 max-w-6xl mx-auto">
        {/* 1 */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
            <SignalMedium size={28} />
          </div>
          <h3 className="text-lg md:text-xl font-semibold">
            Crafted for SaaS Business
          </h3>
          <p className="text-gray-400 text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* 2 */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto flex items-center justify-center bg-blue-600 rounded-full">
            <Layers size={28} />
          </div>
          <h3 className="text-lg md:text-xl font-semibold">
            High-quality Design
          </h3>
          <p className="text-gray-400 text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* 3 */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
            <Layout size={28} />
          </div>
          <h3 className="text-lg md:text-xl font-semibold">
            UI Components and Pages
          </h3>
          <p className="text-gray-400 text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* 4 */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
            <Gauge size={28} />
          </div>
          <h3 className="text-lg md:text-xl font-semibold">
            All Essential Integrations
          </h3>
          <p className="text-gray-400 text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* 5 */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
            <Sliders size={28} />
          </div>
          <h3 className="text-lg md:text-xl font-semibold">
            Fully Customizable
          </h3>
          <p className="text-gray-400 text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* 6 */}
        <div className="text-center space-y-4 md:space-y-6">
          <div className="w-16 h-16 md:w-20 md:h-20 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
            <RefreshCcw size={28} />
          </div>
          <h3 className="text-lg md:text-xl font-semibold">Regular Updates</h3>
          <p className="text-gray-400 text-xs md:text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </section>
  );
}
