/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import '../Courses.css';
import '../../../App.css';
import '../../Home/Home.css'
import {useState} from "react";
import Install from './Py_Install.js'
import Start from './Py_start.js'
import NavBar_component from '../../NavBar.js'
import Button from 'react-bootstrap/Button';

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
            <NavBar_component></NavBar_component>
        <div className='color'>
            
            <div className='div-img'>
                <h1><strong>PYTHON</strong> Dictionary</h1>
            </div>
            <div className="btns">
                <Button variant="outline-success"><a href="/python/install" className='btn-a'>Installation and Setup</a></Button>
                <Button variant="outline-success"><a href="/python/start" className='btn-a'>Python Syntax</a></Button>
            </div>

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