import Navbar from './components/Navbar'
// all routes
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
import Project from './pages/Project'
import Resume from './pages/Resume'

function App() {

  return (
    <>
      <Navbar /> 
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/projects' element={<Project />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/resume' element={<Resume />}/>
      </Routes>
    </>
  )
}

export default App
