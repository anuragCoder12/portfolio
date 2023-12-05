import React from 'react'
import Navbar from './components/navbar/Navbar'
import Body from './components/pages/Body/Body'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Projects from './components/pages/projects/Projects'
import About from './components/pages/About/About'

function App() {
  return (
    <div>
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={ <Body/>}></Route>
          <Route path='/portfolio' element={ <Body/>}></Route>
          <Route path='/projects' element={<Projects/>}></Route>
          <Route path='/about' element={<About/>}></Route>
        </Routes>
      </Router>
      
     
    </div>
  )
}

export default App
