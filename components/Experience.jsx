"use client";

export default function Experience() {
  const experienceData = [
    {
      icon: '💻',
      company: 'SonSystems Software Solutions',
      role: 'Fullstack Intern',
      period: 'Nov 2025 – May 2026',
      type: 'Internship',
      color: 'royal',
      status: '🟢 Completed',
      details: [
        'Developed a patient digital charting system under the <strong>Yakap for PhilHealth</strong> program, enabling secure and efficient medical record storage and retrieval.',
        'Built using <strong>Go</strong> for backend, <strong>React</strong> for frontend, and <strong>MySQL</strong> for database management.'
      ]
    },
    {
      icon: '📊',
      company: 'Bevanda Inventory and Booking System',
      role: 'Fullstack Developer',
      period: 'May 2026 – Jun 2026',
      type: 'SIA Project',
      color: 'purple',
      status: '✅ Delivered',
      details: [
        'Built a complete <strong>booking and reservation system</strong> with integrated inventory management, daily inventory tracking using <strong>Django</strong>, <strong>React</strong>, and <strong>MySQL</strong>.',
        'Implemented <strong>real-time inventory updates</strong>, automatically deducting stock after reservation and booking is acquired.'
      ]
    },
    {
      icon: '🏥',
      company: 'SonSystems Software Solutions',
      role: 'Fullstack Developer',
      period: 'Jun 2026 – Jul 2026',
      type: 'Full-time',
      color: 'green',
      status: '🚀 Ongoing',
      details: [
        'Designed and developed a <strong>digital charting system</strong> for PhilHealth doctors to manage patient records, diagnoses, and treatment histories efficiently.',
        'Enabled doctors to <strong>access patient data anywhere</strong> within the hospital using <strong>Go</strong>, <strong>React</strong>, and <strong>SQLyog</strong>.',
        'Collaborated with a small development team using <strong>Agile methodology</strong> and <strong>Git</strong> for version control.'
      ]
    }
  ];

  return (
    <section
      id="experience"
      className="min-h-screen snap-start flex items-center justify-center px-4 bg-beige-200 relative overflow-hidden"
    >
      <div className="absolute top-40 right-20 w-64 h-64 bg-royal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-64 h-64 bg-royal-700/5 rounded-full blur-3xl" />

      <div className="max-w-5xl mx-auto w-full py-12 relative z-10 fade-in-section">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">
          Professional <span className="text-royal-700">Experience</span>
        </h2>
        <p className="text-center text-gray-500 mb-12">
          My journey as a developer — building real-world solutions
        </p>

        <div className="space-y-6">
          {experienceData.map((exp, index) => (
            <div
              key={index}
              className="group bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-l-4 border-royal-600"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="text-4xl">{exp.icon}</div>
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-xl font-bold text-gray-800">{exp.company}</h3>
                      <span className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-xs font-semibold border border-purple-200">
                        {exp.type}
                      </span>
                    </div>
                    <p className="text-purple-600 font-semibold">{exp.role}</p>
                    <p className="text-gray-500 text-sm">📅 {exp.period}</p>
                    <ul className="mt-3 space-y-1 text-gray-600 text-sm">
                      {exp.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-purple-600 mt-1">▸</span>
                          <span dangerouslySetInnerHTML={{ __html: detail }} />
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <span className="px-4 py-1 bg-green-50 text-green-700 rounded-full text-xs font-semibold whitespace-nowrap border border-green-200">
                  {exp.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}