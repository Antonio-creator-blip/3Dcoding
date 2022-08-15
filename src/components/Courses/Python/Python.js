import React from 'react';
import '../Courses.css';
import '../../../App.css';
import '../../Home/Home.css'
import {useState} from "react";
import Install from './Py_Install.js'
import Start from './Py_start.js'
import NavBarPY from './NavBarPY.js'


function Python(){
    const[i,setI] = useState(0)
    const[time,setTime] = useState(0)

    if(localStorage.getItem('position') && time === 0){
        setI(localStorage.getItem('position'))
        setTime(1)
    }

    localStorage.setItem('position', i);

    const array = [
        <Install></Install>,
        <Start></Start>,
        "ciao3"
    ]

    if(i>= array.length || i <0){
        setI(0)
    }
    
    return(
        <div>
            <NavBarPY></NavBarPY>
        <div className='color'>
            
            <div className='div-img'>
                <h1><strong>PYTHON</strong> Dictionary</h1>
            </div>
            <button><a href="/python/install">Installation and Setup</a></button>
            <button><a href="/python/start">Python Syntax</a></button>
            {/*<div className='dictionary'>
                <div>
                    {array[i]}
    </div>
                <div className='button'>
                    <button onClick={() => setI(i-1)} disabled={i<=0 ? true : false}><i className='arrow left'></i> Previous </button>
                    <div></div>
                    <button onClick={() => setI(i+1)} disabled={i>=array.length-1 ? true : false}> Next <i className="arrow right"></i></button>
                </div>
            </div>*/}
        </div>
        </div>
    
    );
}

export default Python;