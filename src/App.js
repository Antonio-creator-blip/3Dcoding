import './App.css';
import NavBar_component from './components/NavBar';
import Home from './components/Home/Home.js';
import PLC from './components/PLC'
import {Routes,Route} from "react-router-dom";

function App() {
  return (
    <>
        <NavBar_component></NavBar_component>
        <Routes >
          <Route path='/' element={<Home/>}/>
          <Route path='/plc' element={<PLC/>}/>
        </Routes>
    </>

  );
}

export default App;