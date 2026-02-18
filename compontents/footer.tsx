export default function Footer() {
  return (
    <footer className="bg-[#0b0f19] text-gray-400">
      {/* ================= CTA SECTION ================= */}
      <div className="bg-gradient-to-r from-[#111827] via-[#1f2937] to-[#111827] py-20 px-6 md:px-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between ">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Looking for a collaboration? <br />
              Get Started Today!
            </h2>
            <p className="mt-6 max-w-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          <button className="bg-blue-600 hover:bg-blue-700 transition px-8 py-4 rounded-md text-white font-semibold">
            Get Started Now
          </button>
        </div>
      </div>

      {/* ================= MAIN FOOTER ================= */}
      <div className="py-20 px-6 md:px-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-12">
          {/* Logo & About */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">GoStartup</h3>
            <p className="mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            <div className="flex gap-6 text-lg">
              <a href="#" className="hover:text-white transition">
                F
              </a>
              <a href="#" className="hover:text-white transition">
                X
              </a>
              <a href="#" className="hover:text-white transition">
                In
              </a>
              <a href="#" className="hover:text-white transition">
                Be
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-white font-semibold mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="hover:text-white">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Press Media
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Our Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Account
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-white font-semibold mb-6">Get in touch</h4>
            <p className="mb-4">
              Toll Free Customer Care <br />
              <span className="text-white font-semibold">
                +(1) 123 456 7890
              </span>
            </p>

            <p>
              Need live support? <br />
              <span className="text-white font-semibold">
                support@domain.com
              </span>
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-semibold mb-6">Newsletter</h4>
            <p className="mb-4">Subscribe to receive future updates</p>

            <div className="flex bg-[#1f2937] rounded-md overflow-hidden">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent px-4 py-3 w-full outline-none text-gray-300"
              />
              <button className="bg-blue-600 px-5 hover:bg-blue-700 transition"></button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-800 py-6 text-center text-sm">
        © {new Date().getFullYear()} GoStartup. All rights reserved.
      </div>
    </footer>
  );
}
