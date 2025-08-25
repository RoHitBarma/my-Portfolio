import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive and animated personal portfolio built with React and Tailwind CSS.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    image: "/projects/portfolio.png", // public folder me image rakho
    live: "https://your-portfolio-live-link.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "Weather App",
    description: "Real-time weather data fetching app using OpenWeather API and React.",
    tech: ["React", "CSS", "API"],
    image: "/projects/weather.png",
    live: "https://your-weather-app-link.com",
    github: "https://github.com/yourusername/weather-app",
  },
  {
    title: "E-commerce Store",
    description: "Fully functional e-commerce website with cart and product filtering features.",
    tech: ["React", "Tailwind CSS", "Node.js"],
    image: "/projects/ecommerce.png",
    live: "https://your-store-live-link.com",
    github: "https://github.com/yourusername/ecommerce-store",
  },
]

const Project = () => {
  return (
    <section className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <h2 className="text-3xl font-bold text-center mb-12">
        My <span className="text-indigo-500">Projects</span>
      </h2>

      <div>
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:scale-105 transform transition duration-300"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>

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
