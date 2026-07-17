"use client";

export default function Footer() {
  return (
    <footer className="min-h-[50vh] snap-start flex items-center justify-center bg-royal-900 text-white px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-royal-900 via-royal-800 to-royal-900" />
      <div className="text-center relative z-10">
        <div className="text-6xl mb-6">🚀</div>
        <p className="text-royal-300/70 text-lg">
          © {new Date().getFullYear()} Aldrean Kent P. Agad
        </p>
        <p className="text-royal-300/50 text-sm mt-2">
          Built with ❤️ using Next.js & Tailwind CSS
        </p>
        <p className="text-royal-300/50 text-sm mt-1">
          🎓 Just Graduated! Class of 2026
        </p>
        <div className="flex justify-center gap-4 mt-6 flex-wrap">
          <span className="px-3 py-1 bg-royal-800/50 rounded-full text-xs text-royal-300/60 border border-royal-700">✨ Always Learning</span>
          <span className="px-3 py-1 bg-royal-800/50 rounded-full text-xs text-royal-300/60 border border-royal-700">💡 Creative Problem Solver</span>
          <span className="px-3 py-1 bg-royal-800/50 rounded-full text-xs text-royal-300/60 border border-royal-700">🌍 Philippines</span>
        </div>
      </div>
    </footer>
  );
}