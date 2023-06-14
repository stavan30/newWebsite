import './App.css';
import Home from './Home.js'
import About from './About';
import Education from './Education';
import Project from './Project';
import Contact from './Contact';
import Navbar from './Navbar';

import { Routes, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/education' element={<Education/>}/>
        <Route path='project' element={<Project/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
    </div>
  );
}

export default App;
