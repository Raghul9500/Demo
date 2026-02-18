export default function Pricing() {
  return (
    <section className="bg-gradient-to-br from-black via-[#0f172a] to-[#1e293b] text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h1 className="text-6xl font-bold text-blue-500 mb-6">PRICING</h1>

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Affordable Pricing With
            <br /> Simple Plans
          </h2>

          <p className="text-gray-300 font-medium">
            Lorem ipsum dolor sit ametion consectetur adipisc elit.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {/* Starter Plan */}
          <div className="bg-[#111827] p-10 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-2">Starter</h3>
            <p className="text-gray-400 mb-6">For Individuals</p>

            <div className="mb-6">
              <span className="text-4xl font-bold">$100</span>
              <span className="text-gray-400"> /month</span>
            </div>

            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit ametion consectetur adipisc elit.
            </p>

            <ul className="space-y-3 mb-8 text-gray-300">
              <li>✔ 100 GB Storage</li>
              <li>✔ 1 TB Photos and Videos</li>
              <li>✔ Exclusive Support</li>
              <li>✔ Free SEO Tools</li>
              <li>✔ Custom Branding Strategy</li>
            </ul>

            <button className="w-full bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Join This Plan
            </button>
          </div>

          {/* Professional Plan */}
          <div className="bg-[#111827] p-10 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-2">Professional</h3>
            <p className="text-gray-400 mb-6">For Startups</p>

            <div className="mb-6">
              <span className="text-4xl font-bold">$200</span>
              <span className="text-gray-400"> /month</span>
            </div>

            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit ametion consectetur adipisc elit.
            </p>

            <ul className="space-y-3 mb-8 text-gray-300">
              <li>✔ 500 GB Storage</li>
              <li>✔ Unlimited Photos and Videos</li>
              <li>✔ Exclusive Support</li>
              <li>✔ Free SEO Tools</li>
              <li>✔ Custom Branding Strategy</li>
            </ul>

            <button className="w-full bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Join This Plan
            </button>
          </div>

          {/* Business Plan */}
          <div className="bg-[#111827] p-10 rounded-2xl shadow-xl hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-bold mb-2">Business</h3>
            <p className="text-gray-400 mb-6">For Teams</p>

            <div className="mb-6">
              <span className="text-4xl font-bold">$300</span>
              <span className="text-gray-400"> /month</span>
            </div>

            <p className="text-gray-400 mb-6">
              Lorem ipsum dolor sit ametion consectetur adipisc elit.
            </p>

            <ul className="space-y-3 mb-8 text-gray-300">
              <li>✔ Unlimited Storage</li>
              <li>✔ Unlimited Photos and Videos</li>
              <li>✔ Exclusive Support</li>
              <li>✔ Free SEO Tools</li>
              <li>✔ Custom Branding Strategy</li>
            </ul>

            <button className="w-full bg-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
              Join This Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
