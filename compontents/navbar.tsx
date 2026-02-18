"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  // Step 1: mobile menu toggle state
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-black text-white sticky top-0 z-30 font-bold px-4 md:px-16 py-4 md:py-8">
      <div className="flex items-center justify-between">
        {/* LEFT SIDE - Logo + Links */}
        <div className="flex items-center space-x-8">
          {/* Logo */}
          <h1 className="text-2xl">Gostartup</h1>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-6">
            <Link href="/">Features</Link>
            <Link href="/about">About</Link>
            <Link href="/portfolio">Portfolio</Link>
            <Link href="/pricing">Pricing</Link>

            {/* Desktop Dropdown */}
            <div className="relative group">
              <button className="focus:outline-none">Pages ▾</button>
              <div className="absolute hidden group-hover:block bg-black text-white mt-2 rounded shadow-lg w-40">
                <Link
                  href="/blog"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Home
                </Link>
                <Link
                  href="/docs"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Docs
                </Link>
                <Link
                  href="/support"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Support
                </Link>
                <Link
                  href="/blog"
                  className="block px-4 py-2 hover:bg-gray-700"
                >
                  Blog
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE - Desktop Sign-In/Sign-Off */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/signin"
            className="border border-white px-4 py-1 rounded"
          >
            Sign-In
          </Link>
          <Link
            href="/signoff"
            className="bg-white text-black px-4 py-1 rounded"
          >
            Sign-Off
          </Link>
        </div>

        {/* MOBILE HAMBURGER */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-2 px-2">
          {/* Main Links */}
          <Link href="/" className="block px-4 py-2 hover:bg-gray-700 rounded">
            Features
          </Link>
          <Link
            href="/about"
            className="block px-4 py-2 hover:bg-gray-700 rounded"
          >
            About
          </Link>
          <Link
            href="/portfolio"
            className="block px-4 py-2 hover:bg-gray-700 rounded"
          >
            Portfolio
          </Link>
          <Link
            href="/pricing"
            className="block px-4 py-2 hover:bg-gray-700 rounded"
          >
            Pricing
          </Link>

          {/* Mobile Dropdown - Pages */}
          <div className="border-t border-gray-700 mt-2 pt-2">
            <Link
              href="/blog"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Home
            </Link>
            <Link
              href="/docs"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Docs
            </Link>
            <Link
              href="/support"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Support
            </Link>
            <Link
              href="/blog"
              className="block px-4 py-2 hover:bg-gray-700 rounded"
            >
              Blog
            </Link>
          </div>

          {/* Mobile Sign-In / Sign-Off */}
          <div className="mt-2 space-y-2">
            <Link
              href="/signin"
              className="block border border-white px-4 py-1 rounded"
            >
              Sign-In
            </Link>
            <Link
              href="/signoff"
              className="block bg-white text-black px-4 py-1 rounded"
            >
              Sign-Off
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
