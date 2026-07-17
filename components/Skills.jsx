"use client";

import {
  FaReact,
  FaJs,
  FaPython,
  FaGit,
  FaGithub,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaPaintBrush,
  FaRobot,
  FaBrain,
  FaMicrochip,
  FaCode,
  FaMousePointer,
} from 'react-icons/fa';
import {
  SiDjango,
  SiGo,
  SiFlutter,
  SiPostgresql,
  SiGimp,
  SiFirebase,
  SiNextdotjs,
  SiTypescript,
} from 'react-icons/si';
import { GrMysql } from 'react-icons/gr';
import { TbSql } from 'react-icons/tb';

export default function Skills() {
  const allSkills = [
    // Frontend
    { name: 'HTML', icon: FaHtml5, color: '#E34F26', category: 'FRONTEND' },
    { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', category: 'FRONTEND' },
    { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', category: 'FRONTEND' },
    { name: 'React', icon: FaReact, color: '#61DAFB', category: 'FRONTEND' },
    { name: 'Next.js', icon: SiNextdotjs, color: '#000000', category: 'FRONTEND' },
    { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', category: 'FRONTEND' },
    { name: 'Flutter', icon: SiFlutter, color: '#02569B', category: 'FRONTEND' },
    // Angular and GIS removed
    // Backend
    { name: 'Django', icon: SiDjango, color: '#092E20', category: 'BACKEND' },
    { name: 'Go', icon: SiGo, color: '#00ADD8', category: 'BACKEND' },
    { name: 'Python', icon: FaPython, color: '#3776AB', category: 'BACKEND' },
    { name: 'Node.js', icon: FaNodeJs, color: '#339933', category: 'BACKEND' },
    // Database
    { name: 'MySQL', icon: GrMysql, color: '#4479A1', category: 'DATABASE' },
    { name: 'SQLyog', icon: TbSql, color: '#336791', category: 'DATABASE' },
    { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', category: 'DATABASE' },
    { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', category: 'DATABASE' },
    // Tools & Editors
    { name: 'Git', icon: FaGit, color: '#F05032', category: 'DEV0PS' },
    { name: 'GitHub', icon: FaGithub, color: '#181717', category: 'DEV0PS' },
    { name: 'Figma', icon: FaFigma, color: '#F24E1E', category: 'DEV0PS' },
    { name: 'VS Code', icon: FaCode, color: '#007ACC', category: 'EDITOR' },
    { name: 'Cursor', icon: FaMousePointer, color: '#6C5CE7', category: 'EDITOR' },
    // AI/ML
    { name: 'Ollama', icon: FaRobot, color: '#000000', category: 'AI/ML' },
    { name: 'Claude', icon: FaBrain, color: '#5B3E96', category: 'AI/ML' },
    { name: 'DeepSeek', icon: FaMicrochip, color: '#4D6BFE', category: 'AI/ML' },
    // Design
    { name: 'GIMP', icon: SiGimp, color: '#5C5543', category: 'DESIGN' },
    { name: 'Canva', icon: FaPaintBrush, color: '#00C4CC', category: 'DESIGN' },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen snap-start flex items-center justify-center px-4 py-8 bg-beige-100 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-royal-500/5 via-transparent to-royal-700/5" />

      <div className="max-w-7xl mx-auto w-full relative z-10 fade-in-section">
        <h2 className="text-3xl font-bold text-center mb-2 text-gray-800">
          Skills & <span className="text-royal-700">Technologies</span>
        </h2>
        <p className="text-center text-gray-500 text-sm mb-8 max-w-2xl mx-auto">
          Technologies and tools I work with to build modern applications.
        </p>

        {/* ===== GRID: 6 columns on large screens ===== */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {allSkills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/30 text-center"
              >
                <div className="flex justify-center mb-2">
                  <IconComponent
                    className="w-8 h-8 md:w-10 md:h-10 transition-transform duration-300 group-hover:scale-110"
                    style={{ color: skill.color }}
                  />
                </div>
                <p className="text-xs font-semibold text-gray-700 uppercase tracking-wide">
                  {skill.name}
                </p>
                <span className="inline-block mt-1 px-2 py-0.5 bg-royal-50 text-royal-600 text-[8px] font-bold uppercase tracking-wider rounded border border-royal-200">
                  {skill.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}