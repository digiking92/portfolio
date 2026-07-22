import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS_LIST } from '../data/portfolioData';
import { Project } from '../types';
import { ArrowUpRight, FolderGit2, Calendar, ShieldCheck, ChevronRight } from 'lucide-react';

interface ProjectsProps {
  onContactClick: () => void;
}

export default function Projects({ onContactClick }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAll, setShowAll] = useState(false);

  // Additional mock projects for the "View All" transition
  const extraProjects: Project[] = [
    {
      id: 'e-commerce-rebrand',
      category: 'Project 4',
      title: 'E-Commerce Rebrand',
      description: 'A comprehensive visual rebrand including custom typography, iconography, packaging, and digital style guides for a sustainable lifestyle brand.',
      image: 'https://picsum.photos/seed/rebrand/800/600',
      link: '#',
      accentColor: 'brand-yellow',
    },
    {
      id: 'fintech-saas-dashboard',
      category: 'Project 5',
      title: 'Fintech SaaS Dashboard',
      description: 'A complex data-rich interactive web application designed for venture capital analysis and global asset monitoring, centered on extreme legibility.',
      image: 'https://picsum.photos/seed/dashboard/800/600',
      link: '#',
      accentColor: 'brand-green',
    },
  ];

  const visibleProjects = showAll ? [...PROJECTS_LIST, ...extraProjects] : PROJECTS_LIST;

  return (
    <section id="portfolio" className="py-24 bg-bg-dark relative overflow-hidden">
      {/* Decorative Floating Ring Accent for Project 2 Background (Top-right of Mobile Card App) */}
      <div className="absolute top-[35%] right-[-100px] w-72 h-72 rounded-full border-[32px] border-brand-green/10 pointer-events-none animate-float-slow" />
      {/* Decorative Floating Crescent Accent for Project 3 Background (Bottom-left) */}
      <div className="absolute bottom-[20%] left-[-120px] w-80 h-80 rounded-full border-[40px] border-brand-yellow/10 pointer-events-none animate-float-medium" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 space-y-4 text-center md:text-left">
          <div className="flex items-center gap-3 justify-center md:justify-start">
            <span className="w-12 h-[1px] bg-brand-green"></span>
            <span className="font-mono text-xs uppercase tracking-widest text-brand-green font-semibold">
              Selected Works
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-display font-extrabold text-white">
            My Creative Showcases
          </h2>
        </div>

        {/* Projects Staggered List */}
        <div className="space-y-32">
          {visibleProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6 }}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center`}
              >
                
                {/* Project Details (Text) */}
                <div
                  className={`lg:col-span-5 space-y-6 text-left ${
                    isEven ? 'order-2 lg:order-1' : 'order-2 lg:order-2'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs font-semibold uppercase tracking-widest text-brand-green">
                      ── {project.category}
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-display font-bold text-white tracking-tight">
                    {project.title}
                  </h3>

                  <p className="text-gray-400 font-sans text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>

                  <div className="pt-2 flex items-center gap-6">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-2 group text-sm font-sans font-bold uppercase tracking-wider text-white hover:text-brand-yellow transition-colors duration-200 cursor-pointer"
                    >
                      <span>Read More</span>
                      <ChevronRight className="w-4 h-4 text-brand-yellow group-hover:translate-x-1.5 transition-transform duration-200" />
                    </button>
                  </div>
                </div>

                {/* Project Image Panel (Interactive & Layered) */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'order-1 lg:order-2' : 'order-1 lg:order-1'
                  } flex justify-center`}
                >
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="relative w-full max-w-[580px] group cursor-pointer"
                  >
                    {/* Background angled colored slab shadow */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-gray-800/10 to-gray-900/40 rounded-3xl transform -rotate-2 group-hover:rotate-0 transition-transform duration-500 pointer-events-none" />
                    
                    {/* The Image Container with border/rounded look from image */}
                    <div className="relative overflow-hidden rounded-3xl border border-gray-800/60 bg-[#16181D] shadow-2xl transition-all duration-500 group-hover:scale-[1.01] group-hover:border-gray-700/80">
                      <img
                        src={project.image}
                        alt={project.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover aspect-[4/3] transform transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Image hover overlay effect */}
                      <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="w-14 h-14 rounded-full bg-brand-yellow text-black flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-xl shadow-brand-yellow/20">
                          <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                        </div>
                      </div>
                    </div>

                    {/* Left or Right Floating Accent Ring or Crescent decoration */}
                    {project.floatingAccent === 'green-ring' && (
                      <div className="absolute -bottom-8 -right-8 w-24 h-24 rounded-full border-8 border-brand-green/30 pointer-events-none hidden sm:block" />
                    )}
                    {project.floatingAccent === 'yellow-crescent' && (
                      <div className="absolute -top-6 -left-6 w-20 h-20 rounded-full border-[12px] border-brand-yellow/30 pointer-events-none hidden sm:block" />
                    )}
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="mt-24 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-8 py-3 bg-white text-black hover:bg-gray-100 font-sans font-bold text-sm rounded-full tracking-wider uppercase transition-all duration-300 shadow-lg cursor-pointer transform hover:-translate-y-0.5"
            id="view-all-projects-btn"
          >
            {showAll ? 'Show Selected' : 'View All'}
          </button>
        </div>

      </div>

      {/* Project Details Modal (Pop-up with Full Info!) */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 30 }}
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#181B22] border border-gray-800 shadow-2xl z-10 p-6 md:p-10 scrollbar-thin"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-gray-900/60 hover:bg-gray-800 text-gray-400 hover:text-white transition-colors duration-200 cursor-pointer"
                id="close-project-modal-btn"
              >
                <span className="sr-only">Close</span>
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="space-y-8">
                {/* Header info */}
                <div className="space-y-2">
                  <span className="font-mono text-xs uppercase tracking-wider text-brand-green font-semibold">
                    {selectedProject.category}
                  </span>
                  <h3 className="text-3xl font-display font-bold text-white">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Main Showcase Image */}
                <div className="rounded-2xl border border-gray-800 overflow-hidden bg-bg-dark">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-auto object-cover max-h-[450px]"
                  />
                </div>

                {/* Grid Layout description & metadata */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-4">
                  <div className="md:col-span-8 space-y-4 text-left">
                    <h4 className="text-lg font-display font-bold text-white">Project Overview</h4>
                    <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
                      This project represents a full lifecycle design solution tailored to capture the core essence and market position of the client. By examining modern user paradigms and utilizing precise design methodologies, we constructed a responsive experience focused heavily on aesthetics, clarity, and structural honesty.
                    </p>
                    <p className="text-gray-400 font-sans text-sm md:text-base leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="md:col-span-4 bg-[#121418] border border-gray-900/80 p-6 rounded-2xl h-fit space-y-4 text-left">
                    <h4 className="text-sm font-display font-bold text-white uppercase tracking-wider">Project Details</h4>
                    
                    <div className="space-y-3 font-sans text-xs">
                      <div className="flex justify-between py-2 border-b border-gray-800/60">
                        <span className="text-gray-500 font-medium">Client</span>
                        <span className="text-gray-300 font-semibold">Vertex Studio Ltd</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-800/60">
                        <span className="text-gray-500 font-medium">Services</span>
                        <span className="text-gray-300 font-semibold">UX/UI, Visual Branding</span>
                      </div>
                      <div className="flex justify-between py-2 border-b border-gray-800/60">
                        <span className="text-gray-500 font-medium">Year</span>
                        <span className="text-gray-300 font-semibold">2026</span>
                      </div>
                      <div className="flex justify-between py-2">
                        <span className="text-gray-500 font-medium">Industry</span>
                        <span className="text-gray-300 font-semibold">Creative & Tech</span>
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        setSelectedProject(null);
                        onContactClick();
                      }}
                      className="w-full py-3 bg-brand-yellow hover:bg-brand-yellow-hover text-black font-sans font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 cursor-pointer text-center"
                    >
                      Inquire About Project
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
