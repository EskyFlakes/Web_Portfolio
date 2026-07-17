"use client";

import Image from 'next/image';

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen snap-start flex items-center justify-center px-4 bg-beige-100 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-700/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto w-full relative z-10 fade-in-section">
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl px-6 sm:px-8 md:px-10 py-6 sm:py-8 md:py-10 shadow-xl border border-white/30 -mt-8 md:-mt-12">
          <h2 className="text-4xl font-bold text-center mb-10 text-gray-800">
            About <span className="text-royal-700">Me</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 group">
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
            
            {/* Text + Hobbies */}
            <div>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                I'm Aldrean Kent P. Agad, a fresh graduate from Ateneo de Davao University
                with a passion for technology and innovation.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                Born on October 20, 2002, I've always been fascinated by how technology
                can solve real-world problems and create meaningful impact.
              </p>
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                I'm eager to apply my skills and knowledge in a professional setting
                and continue learning and growing as a developer.
              </p>

              {/* ===== HOBBIES / INTERESTS (Unique Traits) ===== */}
              <div className="mt-6 pt-6 border-t border-beige-300">
                <p className="text-sm font-medium text-gray-500 mb-3">🎯 Beyond the Code</p>
                <div className="flex flex-wrap gap-2">
                  <span className="hobby-gaming px-3 py-1.5 bg-royal-50 text-royal-700 rounded-full text-xs font-medium border border-royal-200 cursor-pointer">
                    🎮 Gaming
                  </span>
                  <span className="hobby-music px-3 py-1.5 bg-royal-50 text-royal-700 rounded-full text-xs font-medium border border-royal-200 cursor-pointer">
                    🎵 Music
                  </span>
                  <span className="hobby-photo px-3 py-1.5 bg-royal-50 text-royal-700 rounded-full text-xs font-medium border border-royal-200 cursor-pointer">
                    📸 Photography
                  </span>
                  <span className="hobby-gym px-3 py-1.5 bg-royal-50 text-royal-700 rounded-full text-xs font-medium border border-royal-200 cursor-pointer">
                    🏋️ Gym
                  </span>
                  <span className="hobby-cycling px-3 py-1.5 bg-royal-50 text-royal-700 rounded-full text-xs font-medium border border-royal-200 cursor-pointer">
                    🚴 Cycling
                  </span>
                  <span className="hobby-walking px-3 py-1.5 bg-royal-50 text-royal-700 rounded-full text-xs font-medium border border-royal-200 cursor-pointer">
                    🚶 Walking
                  </span>
                  <span className="hobby-cooking px-3 py-1.5 bg-royal-50 text-royal-700 rounded-full text-xs font-medium border border-royal-200 cursor-pointer">
                    🍳 Cooking
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== CUSTOM ANIMATIONS PER HOBBY ===== */}
      <style jsx>{`
        /* Base styles for all badges */
        .hobby-gaming,
        .hobby-music,
        .hobby-photo,
        .hobby-gym,
        .hobby-cycling,
        .hobby-walking,
        .hobby-cooking {
          transition: all 0.3s ease;
          transform-origin: center;
        }

        /* ----- GAMING: Wiggle + Boom like controller rumble ----- */
        .hobby-gaming:hover {
          animation: gamingAnim 0.7s ease forwards;
        }
        @keyframes gamingAnim {
          0% { transform: scale(1) rotate(0); }
          15% { transform: scale(1.1) rotate(-8deg); }
          30% { transform: scale(1.2) rotate(8deg); }
          45% { transform: scale(1.1) rotate(-5deg); }
          60% { transform: scale(1.4) rotate(0deg); box-shadow: 0 0 30px rgba(67,56,202,0.5); }
          80% { transform: scale(1.3); }
          100% { transform: scale(1.25); box-shadow: 0 10px 30px rgba(67,56,202,0.3); }
        }

        /* ----- MUSIC: Smooth jazz sway (like a saxophone) ----- */
        .hobby-music:hover {
          animation: musicAnim 0.8s ease-in-out forwards;
        }
        @keyframes musicAnim {
          0% { transform: scale(1) rotate(0); }
          25% { transform: scale(1.1) rotate(-6deg) translateY(-3px); }
          50% { transform: scale(1.15) rotate(6deg) translateY(3px); }
          75% { transform: scale(1.1) rotate(-4deg) translateY(-2px); }
          100% { transform: scale(1.2) rotate(0deg) translateY(0); box-shadow: 0 10px 30px rgba(67,56,202,0.25); }
        }

        /* ----- PHOTOGRAPHY: Flash effect (quick bright pulse) ----- */
        .hobby-photo:hover {
          animation: photoAnim 0.5s ease forwards;
        }
        @keyframes photoAnim {
          0% { transform: scale(1); background: #e0e7ff; }
          30% { transform: scale(1.3); background: #ffffff; box-shadow: 0 0 40px rgba(255,255,255,0.8); }
          60% { transform: scale(1.2); background: #dbeafe; }
          100% { transform: scale(1.2); box-shadow: 0 10px 30px rgba(67,56,202,0.3); }
        }

        /* ----- GYM: Up and down bounce (like lifting) ----- */
        .hobby-gym:hover {
          animation: gymAnim 0.6s ease forwards;
        }
        @keyframes gymAnim {
          0% { transform: scale(1) translateY(0); }
          25% { transform: scale(1.1) translateY(-10px); }
          50% { transform: scale(1.2) translateY(0); }
          75% { transform: scale(1.15) translateY(-5px); }
          100% { transform: scale(1.2) translateY(0); box-shadow: 0 10px 30px rgba(67,56,202,0.3); }
        }

        /* ----- CYCLING: Spinning pedals (rotation) ----- */
        .hobby-cycling:hover {
          animation: cyclingAnim 0.7s linear forwards;
        }
        @keyframes cyclingAnim {
          0% { transform: scale(1) rotate(0); }
          100% { transform: scale(1.2) rotate(360deg); box-shadow: 0 10px 30px rgba(67,56,202,0.3); }
        }

        /* ----- WALKING: Side-step shuffle ----- */
        .hobby-walking:hover {
          animation: walkingAnim 0.7s ease forwards;
        }
        @keyframes walkingAnim {
          0% { transform: scale(1) translateX(0); }
          25% { transform: scale(1.1) translateX(-8px); }
          50% { transform: scale(1.15) translateX(8px); }
          75% { transform: scale(1.1) translateX(-4px); }
          100% { transform: scale(1.2) translateX(0); box-shadow: 0 10px 30px rgba(67,56,202,0.3); }
        }

        /* ----- COOKING: Sizzle (rapid small shakes with sparkle) ----- */
        .hobby-cooking:hover {
          animation: cookingAnim 0.5s ease forwards;
        }
        @keyframes cookingAnim {
          0% { transform: scale(1) rotate(0); }
          10% { transform: scale(1.05) rotate(-4deg); }
          20% { transform: scale(1.1) rotate(4deg); }
          30% { transform: scale(1.08) rotate(-3deg); }
          40% { transform: scale(1.12) rotate(3deg); }
          50% { transform: scale(1.1) rotate(-2deg); box-shadow: 0 0 20px rgba(255,200,0,0.3); }
          75% { transform: scale(1.15) rotate(0deg); }
          100% { transform: scale(1.2) rotate(0deg); box-shadow: 0 10px 30px rgba(67,56,202,0.3); }
        }
      `}</style>
    </section>
  );
}