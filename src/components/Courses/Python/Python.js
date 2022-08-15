/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import '../Courses.css';
import '../../../App.css';
import python01 from '../img/python01.jpg';
import {useState} from "react";
import Install from './Py_Install.js'

function Python(){
    const[i,setI] = useState(0)

    const array = [
        <Install></Install>,
        "ciao2",
        "ciao3"
    ]

    if(i>= array.length || i <0){
        setI(0)
    }


    console.log(i);
    console.log("Array: " +array.length);


    return(
        <div className='color'>
            <div className='div-img'>
                <h1><strong>PYTHON</strong> Dictionary</h1>
                <a href="https://www.pexels.com/it-it/foto/mani-scrivania-laptop-internet-4974912/" target="_blank"><img src={python01} alt="" className='img' /></a>
                
            </div>
            <div className='dictionary'>
                <div>
                    {array[i]}
                </div>
                <div>
                    <button onClick={() => setI(i-1)} disabled={i<=0 ? true : false}>Previous</button>
                    <button onClick={() => setI(i+1)} disabled={i>=array.length-1 ? true : false}> Next</button>
                </div>
            </div>
        </div>
    );
}

export default Python;