import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import rohitIMG from '../assets/rohit-IMG.png'
import rohitCv from '../assets/RohitbarmaCV.pdf'
import { ReactTyped } from "react-typed";
import { FaReact, FaJsSquare, FaGithub, FaHtml5, FaCss3Alt } from "react-icons/fa";


const Home = () => {
  return (
    <section className='relative min-h-screen py-4 px-5 md:px-20 pt-20 bg-gray-300 dark:bg-gray-900 text-black dark:text-white overflow-hidden'>

      {/* 🔹 Subtle background decoration */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>

      <div className='max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center h-full'>
        <motion.div
          className='flex-1'
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className='text-lg text-blue-950 dark:text-yellow-400 mb-3'>Hi, my name is</p>
          <h1 className='text-3xl sm:text-4xl md:text-6xl font-bold mb-4'>
            Rohit&nbsp;
            <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 bg-clip-text text-transparent">
              Barma
            </span>
          </h1>
          <h2 className='text-xl sm:text-2xl md:text-4xl font-semibold mb-6'>
            I&apos;m a{" "}
            <span className='text-amber-800 dark:text-yellow-300'>
              <ReactTyped
                strings={[
                  "Frontend Developer",
                  "React Developer",
                  "UI Enthusiast"
                ]}
                typeSpeed={60}
                backSpeed={30}
                backDelay={1200}
                loop
                smartBackspace
                showCursor
                cursorChar="|"
              />
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8 max-w-lg leading-relaxed">
            I design and build modern, responsive websites and web applications using React, Tailwind CSS, and JavaScript.
            I love turning ideas into visually appealing and functional products.
          </p>

          {/* Buttons are there */}
          <div className='flex flex-wrap justify-start gap-4 mb-4'>
            <a
              href={rohitCv}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition hover:scale-105"
            >
              Download Resume
            </a>
            <Link
              to="/contact"
              className="border-2 border-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-gray-900 hover:scale-105 transition"
            >
              Contact Me
            </Link>
          </div>

          {/* 🔹 Icons row */}
          <motion.div
            className="flex justify-center md:justify-start gap-6 text-3xl md:text-4xl text-gray-500 dark:text-gray-400 md:pt-4 pt-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <FaHtml5 className="hover:text-orange-500 transition" />
            <FaCss3Alt className="hover:text-blue-500 transition" />
            <FaJsSquare className="hover:text-yellow-400 transition" />
            <FaReact className="hover:text-cyan-400 transition" />
            <FaGithub className="hover:text-white transition" />
          </motion.div>

        </motion.div>

        {/* Right Image / Illustration */}
        <motion.div
          className="flex-1 flex justify-center mt-12 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <img
            src={rohitIMG}
            alt="Profile"
            className="rounded-full w-60 h-60 sm:w-72 sm:h-72 md:w-[24rem] md:h-[24rem] object-cover border-4 border-blue-950 dark:border-yellow-400 shadow-xl hover:scale-105 transition-transform duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        </motion.div>
      </div>
    </section>
  )
}

export default Home
