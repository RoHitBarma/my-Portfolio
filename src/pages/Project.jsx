import React from 'react';
import { motion } from 'framer-motion';
import portfolio from '../assets/project1.png'
import BurgerStore from '../assets/project2.png'
import BlogApp from '../assets/project3.png'

const projects = [
  {
    title: "Portfolio Website",
    description: "A modern and fully responsive personal portfolio showcasing my skills, projects, and experience. Built with React, Tailwind CSS, and Framer Motion for smooth animations and an interactive UI.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: portfolio, 
    live: "https://rohitbarma.github.io/my-Portfolio",
    github: "https://github.com/RoHitBarma/my-Portfolio",
  },
  {
    title: "Tasty Burger",
    description: "A restaurant-themed website for a fictional burger brand. It includes a stylish homepage, menu section, brand details, and smooth navigation using React Router. Designed with Tailwind CSS for a modern and responsive look.",
    tech: ["React", "Tailwind CSS", "React-Router"],
    image: BurgerStore,
    live: "https://rohitbarma.github.io/Tasty-Burger/",
    github: "https://github.com/RoHitBarma/Tasty-Burger",
  },
  {
    title: "Blog App",
    description: "A mini blog application where users can explore posts with features like light/dark theme toggle, like/dislike functionality, and error handling using React Error Boundaries. Built with React and styled using Tailwind CSS and Bootstrap.",
    tech: ["React", "Tailwind CSS", "Bootstrap"],
    image: BlogApp,
    live: "https://rohitbarma.github.io/blog-app/",
    github: "https://github.com/RoHitBarma/blog-app",
  },
]

const Project = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-indigo-500">Projects</span>
      </h2>

      <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
            />

            {/* card section */}
            <div className='p-4'>
              <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
              <p className='text-sm text-gray-300 mb-4'>{project.description}</p>

              {/* Tech stack badges */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-gray-700 px-3 py-1 rounded-full text-sm border border-gray-600"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="flex gap-3">
                <a
                  href={project.live}
                  target="_blank"
                  className="px-4 py-2 bg-indigo-600 rounded-lg hover:bg-indigo-700 text-sm"
                >
                  Live Demo
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  className="px-4 py-2 bg-gray-700 rounded-lg hover:bg-gray-600 text-sm"
                >
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Project
