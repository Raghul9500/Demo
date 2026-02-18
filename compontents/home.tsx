export default function Mainpages() {
  return (
    <section className="bg-gradient-to-r from-black via-[#0f172a] to-[#1e293b] text-white min-h-screen flex flex-col md:flex-row items-center px-4 sm:px-6 md:px-20 overflow-hidden">
      <div className="flex flex-col md:flex-row w-full items-center">
        {/* LEFT CONTENT */}
        <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Next.js Boilerplate <br />
            for Your Startup
          </h1>

          <p className="text-gray-400 max-w-full md:max-w-md mx-auto md:mx-0">
            Handcrafted Next.js starter for Startup, Business, Agency or SaaS
            Website.
          </p>

          <button className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Get Started
          </button>
        </div>

        {/* RIGHT SIDE IMAGE CONTAINER */}
        <div className="w-full md:w-1/2 relative flex justify-center items-center mt-10 md:mt-0">
          {/* BACK IMAGE */}
          <img
            src="/image/image-2.webp"
            className="w-[80%] md:w-[420px] h-auto md:h-[500px] object-cover rounded-l shadow-2xl"
          />

          {/* FRONT IMAGE */}
          <img
            src="/image/image-1.webp"
            className="w-[60%] md:w-[350px] rounded-l shadow-xl absolute md:top-20 top-10 left-0 md:left-2"
          />

          {/* BLUE GLOW EFFECT */}
          <div className="absolute bottom-0 right-10 w-32 h-32 md:w-40 md:h-40 bg-blue-600 rounded-full blur-3xl opacity-30"></div>
        </div>
      </div>
    </section>
  );
}
