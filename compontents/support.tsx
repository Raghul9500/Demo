"use client";

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
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16 max-w-5xl mx-auto">
          <div className="text-center space-y-3">
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
              <SignalMedium className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold">UIdeck</h3>
          </div>

          <div className="text-center space-y-3">
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto flex items-center justify-center bg-blue-600 rounded-full">
              <Layers className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold">Tailadmin</h3>
          </div>

          <div className="text-center space-y-3">
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
              <Layout className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold">Graygrids</h3>
          </div>

          <div className="text-center space-y-3">
            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto flex items-center justify-center bg-gray-800 rounded-full">
              <Gauge className="w-6 h-6 md:w-7 md:h-7" />
            </div>
            <h3 className="text-sm md:text-lg font-semibold">Lineicon</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
