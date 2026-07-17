"use client";

export default function Projects() {
  const projectsData = [
    {
      title: 'AI-Powered File Management System',
      description: 'An intelligent file management system that uses AI to automatically organize, categorize, and tag files for efficient retrieval and storage.',
      icon: '🤖',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      title: 'AI-Enhanced Email Management Automation',
      description: 'An AI-driven email management tool that automatically categorizes, prioritizes, and responds to emails using natural language processing.',
      icon: '📧',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Portfolio Website',
      description: 'Personal portfolio website built with Next.js and Tailwind CSS, featuring smooth scrolling, animated sections, and a modern glassmorphism design.',
      icon: '💼',
      gradient: 'from-orange-500 to-yellow-500',
    },
    {
      title: 'Toril Public Market Navigator (Capstone)',
      description: 'Implemented location-based features for navigating Toril Public Market, helping users find stalls, products, and navigate the market efficiently using real-time location services.',
      icon: '📍',
      gradient: 'from-red-500 to-orange-500',
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen snap-start flex items-center justify-center px-4 py-8 bg-beige-100 relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-96 h-96 bg-royal-500/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-royal-700/5 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto w-full relative z-10 fade-in-section">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          My <span className="text-royal-700">Projects</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10 max-w-2xl mx-auto">
          Here are some projects I've worked on during my studies and personal time.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 border border-gray-100/50"
            >
              <div className={`h-32 bg-gradient-to-r ${project.gradient} flex items-center justify-center text-6xl`}>
                {project.icon}
              </div>
              <div className="p-6">
                <h3 className="font-bold text-xl text-gray-800 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-royal-700 font-semibold hover:text-royal-900 transition-all text-sm"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}