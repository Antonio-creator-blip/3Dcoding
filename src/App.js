/* eslint-disable react/jsx-pascal-case */
/* eslint-disable react/jsx-no-comment-textnodes */
import './App.css';
import Home from './components/Home/Home.js';
import PLC from './components/Courses/PLC.js'
import Python from './components/Courses/Python/Python.js'
import {Routes,Route} from "react-router-dom";
import './components/Courses/Courses.css';
import './components/Home/Home.css'
import './components/Home/Home.css'
import './components/Courses/Courses.css'

import Start from './components/Courses/Python/Py_start.js'
import Install from './components/Courses/Python/Py_Install';

function App() {
  return (
    <>
      <Routes >
        <Route path='/' element={<Home/>}/>
        <Route path='/python' element={<Python/>}/>
        <Route path='/plc' element={<PLC/>}/>
        <Route path='/python/install' element={<Install/>}/>
        <Route path='/python/start' element={<Start/>}/>
      </Routes>
        
    </>

  );
}

export default App;