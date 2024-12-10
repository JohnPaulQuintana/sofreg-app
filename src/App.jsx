import './App.css'
import Home from './app/pages/Home'

import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/services/design' element={<Services />} />
          <Route path='/services/web' element={<Services />} />
          <Route path='/services/video' element={<Services />} />
          <Route path='/profile/about' element={<Profile />} />
          <Route path='/project' element={<Project />} /> */}
      </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
