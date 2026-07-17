"use client";

import Image from 'next/image';

export default function Hero({ scrollToSection }) {
  return (
    <section
      id="hero"
      className="min-h-screen snap-start flex items-center justify-center px-4 bg-gradient-to-br from-beige-100 via-beige-200 to-beige-300 relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-royal-500/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-royal-700/10 rounded-full blur-3xl animate-pulse delay-700" />

      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row items-center gap-12 py-8 relative z-10">
        
        {/* Left: Text Content with Card */}
        <div className="flex-1 text-center md:text-left">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-xl border border-white/30 max-w-2xl mx-auto md:mx-0">
            {/* Greeting */}
            <p className="text-gray-700 text-base sm:text-lg md:text-xl mb-2">
              Hello :) I'm{' '}
              <span className="font-semibold text-royal-800">
                Aldrean Kent P. Agad
              </span>
              {' '}at your service!
            </p>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-royal-900 leading-[1.1]">
              Full-Stack
              <br />
              <span className="text-royal-800">Developer</span>
            </h1>

            <p className="text-gray-700 text-base sm:text-lg md:text-xl mt-4 max-w-md mx-auto md:mx-0">
              Passionate developer ready to build innovative solutions and
              make a difference through technology.
            </p>

            {/* ===== BUTTONS ===== */}
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mt-6">
              {/* View My Works */}
              <button
                onClick={() => scrollToSection('projects')}
                className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base font-medium"
              >
                View My Works →
              </button>

              {/* Download Resume — Solid Blue */}
              <a
                href="/resume.pdf"
                download
                className="px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg hover:shadow-blue-500/25 text-sm sm:text-base font-medium inline-block"
              >
                Download my Resume
              </a>
            </div>
          </div>
        </div>

        {/* Right: Photo */}
        <div className="flex-shrink-0">
          <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 group">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-royal-500 to-royal-700 animate-pulse group-hover:animate-spin-slow" />
            <div className="absolute inset-1 rounded-full overflow-hidden border-4 border-white shadow-2xl group-hover:scale-105 transition-transform duration-500">
              <Image
                src="/light.png"
                alt="Aldrean Kent P. Agad"
                fill
                className="object-cover object-[35%_25%] scale-115"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-subtle z-10 hidden md:block">
        <span className="text-gray-400 text-xs block text-center mb-1">Scroll</span>
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}