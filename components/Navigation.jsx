"use client";

export default function Navigation({
  sectionIds,
  sectionLabels,
  activeSection,
  scrollToSection,
  isMenuOpen,
  setIsMenuOpen,
}) {
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-md z-50 shadow-sm border-b border-beige-300">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="w-8" />

        <div className="hidden md:flex gap-1">
          {sectionIds.map((id, index) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeSection === id
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-blue-700 hover:bg-gray-50'
              }`}
            >
              {sectionLabels[index]}
            </button>
          ))}
        </div>

        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-beige-300 py-4 px-4 flex flex-col gap-2">
          {sectionIds.map((id, index) => (
            <button
              key={id}
              onClick={() => {
                scrollToSection(id);
                setIsMenuOpen(false);
              }}
              className={`text-left py-2 px-4 rounded-lg transition ${
                activeSection === id
                  ? 'bg-blue-600 text-white font-semibold'
                  : 'text-gray-600 hover:bg-beige-100'
              }`}
            >
              {sectionLabels[index]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}