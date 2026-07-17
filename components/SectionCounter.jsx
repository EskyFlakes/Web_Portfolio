"use client";

export default function SectionCounter({ sectionIds, activeSection }) {
  return (
    <div className="fixed bottom-8 right-8 z-40 hidden md:block">
      <div className="bg-white/80 backdrop-blur-md px-4 py-3 rounded-full shadow-lg border border-beige-300">
        <span className="text-sm font-medium text-gray-600">
          <span className="text-royal-700 font-bold">
            {String(sectionIds.indexOf(activeSection) + 1).padStart(2, '0')}
          </span>
          <span className="text-gray-400"> / </span>
          <span className="text-gray-400">{String(sectionIds.length).padStart(2, '0')}</span>
        </span>
      </div>
    </div>
  );
}