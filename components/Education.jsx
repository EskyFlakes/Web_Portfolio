"use client";

export default function Education() {
  const educationData = [
    {
      level: 'Kindergarten',
      school: 'Saint Peter College of Toril',
      course: 'Kindergarten',
      year: '2008-2010',
      icon: '🌈',
      color: 'pink',
      border: 'border-pink-400',
      text: 'text-pink-700',
      bg: 'bg-pink-50',
      ring: 'ring-pink-400',
    },
    {
      level: 'Elementary',
      school: 'Saint Peter College of Toril',
      course: 'Grade School',
      year: '2010-2016',
      icon: '✏️',
      color: 'yellow',
      border: 'border-yellow-400',
      text: 'text-yellow-700',
      bg: 'bg-yellow-50',
      ring: 'ring-yellow-400',
    },
    {
      level: 'Junior High School',
      school: 'Saint Peter College of Toril',
      course: 'Junior High School',
      year: '2016-2020',
      icon: '📖',
      color: 'green',
      border: 'border-green-400',
      text: 'text-green-700',
      bg: 'bg-green-50',
      ring: 'ring-green-400',
    },
    {
      level: 'Senior High School',
      school: 'Ateneo de Davao University',
      course: 'Pre-Engineering (STEM)',
      year: '2020-2022',
      icon: '📚',
      color: 'purple',
      border: 'border-purple-400',
      text: 'text-purple-700',
      bg: 'bg-purple-50',
      ring: 'ring-purple-400',
    },
    {
      level: 'College',
      school: 'Ateneo de Davao University',
      course: 'BS Information Technology',
      year: '2022-2026',
      icon: '🎓',
      color: 'royal',
      border: 'border-royal-400',
      text: 'text-royal-700',
      bg: 'bg-royal-50',
      ring: 'ring-royal-400',
    },
  ];

  return (
    <section
      id="education"
      className="min-h-screen snap-start flex items-center justify-center px-4 py-8 bg-beige-200 relative overflow-hidden"
    >
      <div className="absolute top-20 left-20 w-64 h-64 bg-royal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-64 h-64 bg-royal-700/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative z-10 fade-in-section">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 tracking-tight">
          My <span className="text-royal-700">Education</span>
        </h2>

        {/* ===== COMPACT GRID: 5 columns ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden border border-gray-100"
            >
              <div className="p-4">
                {/* Icon with ring */}
                <div className={`w-10 h-10 rounded-full ${edu.bg} border-2 ${edu.border} flex items-center justify-center text-base ${edu.text} ring-2 ${edu.ring}/20 mb-2 mx-auto`}>
                  {edu.icon}
                </div>

                {/* Level */}
                <span className={`text-[10px] font-semibold uppercase tracking-wider ${edu.text} block text-center`}>
                  {edu.level}
                </span>

                {/* School name */}
                <h3 className="text-xs font-bold text-gray-800 text-center leading-tight mt-1 line-clamp-2">
                  {edu.school}
                </h3>

                {/* Course */}
                <p className="text-[10px] text-gray-600 font-medium text-center line-clamp-2">
                  {edu.course}
                </p>

                {/* Year */}
                <div className="mt-2 pt-2 border-t border-gray-100 flex justify-center">
                  <span className="text-[10px] font-medium text-gray-500">
                    📅 {edu.year}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}