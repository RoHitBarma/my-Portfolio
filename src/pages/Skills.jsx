import { div } from 'framer-motion/client';
import React from 'react';
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiJavascript, SiTailwindcss, SiGithub } from "react-icons/si";


const skillsData = [
  { name: "HTML", percentage: 95, color: "#E34F26", icon: <FaHtml5 />, logoColor: "#E34F26"},
  { name: "CSS", percentage: 90, color: "#1572B6",icon: <FaCss3Alt />, logoColor: "#1572B6" },
  { name: "JavaScript", percentage: 85, color: "#F7DF1E", icon: <SiJavascript />, logoColor: "#F7DF1E" },
  { name: "React", percentage: 85, color: "#61DBFB", icon: <FaReact />, logoColor: "#61DAFB" },
  { name: "Tailwind CSS", percentage: 90, color: "#38BDF8", icon: <SiTailwindcss />, logoColor: "#38B2AC" },
  { name: "Node.js", percentage: 70, color: "#68A063", icon: <FaNodeJs />, logoColor: "#68A063" },
  { name: "Git & GitHub", percentage: 80, color: "#F05032", icon: <FaGitAlt />, logoColor: "#38B2AC" },
];

const tools = ["VS Code", "Bootstrap", "Figma", "Netlify", "NPM"];

const softSkills = ["Problem Solving", "Teamwork", "Time Management", "Communication"];

const Skills = () => {
  return (
    <section className=" min-h-screen bg-gray-900 text-white">
      <div className='max-w-6xl py-12 px-6 mx-auto'>
        <h2 className="text-3xl font-bold text-center mb-10 mt-5">
          My <span className="text-indigo-500">Skills</span>
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 justify-items-center">
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center gap-4"
              initial={{opacity: 0, scale: 0.8}}
              whileInView={{opacity: 1, scale: 1}}
              transition={{duration: 0.5, delay: index * 0.1}}
            >
              <div className='w-24 h-24'>
                <CircularProgressbar
                  value={skill.percentage}
                  text={`${skill.percentage}%`}
                  styles={buildStyles({
                    textColor: "#fff",
                    pathColor: skill.color,
                    trailColor: "#1f2937",
                  })}
                />
              </div>
              <p className="text-lg font-semibold flex items-center gap-2">
                <span className="text-2xl" style={{color: skill.logoColor}}>{skill.icon}</span>
                {skill.name}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Tools */}
        <motion.div 
          className="mb-10 mt-10"
          initial={{opacity: 0, x: -50}}
          whileInView={{opacity: 1, x: 0}}
          transition={{duration: 0.6}}
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">Tools & Platforms</h3>
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-full text-sm border border-gray-700 hover:border-indigo-500 transition"
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-400">Soft Skills</h3>
          <div className="flex flex-wrap gap-3">
            {softSkills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-800 px-4 py-2 rounded-full text-sm border border-gray-700 hover:border-indigo-500 transition"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
