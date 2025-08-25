import React from 'react';
import { motion } from 'framer-motion';
import rohitIMG from '../assets/rohit-IMG.png'
import rohitCv from '../assets/RohitbarmaCV.pdf'
import { span } from 'framer-motion/client';

const About = () => {

  const skills = ["HTML", "CSS", "JavaScript", "Tailwind CSS", "React", "Nodejs", "Git & Github", "Bootstrap"]

  return (
    <section className='min-h-screen bg-gray-900 pt-10 text-white flex items-center' id="about">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
        {/* Profile image of about */}
        <motion.img 
          src={rohitIMG}
          alt='profile img'
          className='w-52 h-52 md:w-72 md:h-72 object-cover rounded-full mx-auto border-4 border-yellow-400 shadow-xl hover:scale-105 transition-transform duration-300'
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        />

        {/* about section text */}
        <motion.div
          initial={{opacity: 0, x: 50}}
          animate={{opacity: 1, x: 0}}
          transition={{duration: 0.7}}
        >
          <h2 className='text-2xl mb-3 text-yellow-600'>About Me</h2>
          <p className='mb-6 leading-relaxed text-gray-300'>
            Hi I'm <span className='font-semibold text-indigo-600'>Rohit Barma</span>,
            a passionate <span className='font-semibold'>Frontend Developer</span> currently learning 
            <span className="font-semibold text-indigo-400"> Full Stack Development</span>. 
            I love building interactive and user-friendly web apps.
          </p>

          {/* skills */}
          <h3 className="text-xl mb-3 font-semibold text-yellow-500 ">Skills</h3>
          <div className="flex flex-wrap gap-3 mb-6">
            {skills.map((skill, index) => (
              <span
                key={index}
                className='px-4 py-1.5 bg-indigo-100 text-indigo-600 font-medium rounded-full shadow-sm hover:bg-indigo-200 transition'
              >
                {skill}
              </span>
            ))}
          </div>

          <h3 className='text-xl font-semibold text-yellow-500 mb-2'>Currently Learning</h3>
          <p className='text-gray-400 mb-6'>Node.js, Express, and MonogoDB</p>

          <div className="flex gap-4">
            <a href={rohitCv} target="_blank" className="px-5 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
              View Resume
            </a>
            <a href="https://github.com/RoHitBarma" target="_blank" className="px-5 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-100">
              GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
