import './App.css'
// import './Main.css'
// import Navbar from './app/components/Navbar'
import Home from './app/pages/Home'
import Profile from './app/pages/Profile';
import Services from './app/pages/Services'
import Project from './app/pages/Project'
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/services/design' element={<Services />} />
          <Route path='/services/web' element={<Services />} />
          <Route path='/services/video' element={<Services />} />
          <Route path='/profile/about' element={<Profile />} />
          <Route path='/project' element={<Project />} />
      </Routes>
    </BrowserRouter>
    {/* Navbar */}
     
      {/* <Home /> */}
    </>
  )
}

export default App
