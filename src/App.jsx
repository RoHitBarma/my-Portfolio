import Navbar from './components/Navbar'
import { useState, useEffect } from 'react'
// all routes
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Resume from './pages/Resume'
import { ImOpt } from 'react-icons/im'

function App() {

  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme)
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [])

  // Toggle function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
  };

  return (
    <>
      <Navbar theme={theme} toggleTheme={toggleTheme} /> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills theme={theme} />}/>
        <Route path='/projects' element={<Project />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/resume' element={<Resume />}/>
      </Routes>
    </>
  )
}

export default App
