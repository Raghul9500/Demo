export default function Blog() {
  return (
    <section className="bg-gradient-to-br from-black via-[#0f172a] to-[#1e293b] text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-6xl font-bold text-blue-500 mb-6">Blogs</h1>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest News & Articles
            <br /> From Our Blog
          </h2>

          <p className="text-gray-300 font-medium">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* Blog Cards Row */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Card 1 */}
          <div className="bg-[#111827] rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition">
            <img
              src="/image/image-1.webp"
              alt="blog1"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <p className="text-gray-400 text-sm">Jhon Doee • Jun 18, 2023</p>

              <h3 className="text-xl font-bold mt-3 leading-snug">
                Exploring MERN Stack: Powering Modern Web Development
              </h3>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-[#111827] rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition">
            <img
              src="/image/image-2.webp"
              alt="blog2"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <p className="text-gray-400 text-sm">Amrin • Jun 25, 2023</p>

              <h3 className="text-xl font-bold mt-3 leading-snug">
                Test webhook
              </h3>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-[#111827] rounded-xl overflow-hidden border border-gray-700 hover:border-blue-500 transition">
            <img
              src="/image/image-3.webp"
              alt="blog3"
              className="w-full h-56 object-cover"
            />

            <div className="p-6">
              <p className="text-gray-400 text-sm">Jhon Doee • Jun 18, 2023</p>

              <h3 className="text-xl font-bold mt-3 leading-snug">
                The Power of UI/UX: Elevating Digital Experiences
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
