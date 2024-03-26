import React from 'react'
import { Link } from 'react-router-dom'
import tut1 from '../assets/Image/tut1.png' 
import '../assets/Style/Tuta.css'
import 'bootstrap/dist/css/bootstrap.css'

const Appp = () => {
  return (
    <>
    <div className='d-flex '> 
    <div className='col-3 ps-2'>
    <div className="text-success mt-2 ms-1">The Focused Tutor</div><br />
    <div className="text-primary ms-1">Features:</div><br />
    <Link id={'tuma'} className="text-decoration-none text-succe ms-1" to='/home/'>Home Page</Link><br /><br />
    <Link id={'tuma'} className="text-decoration-none text-succe ms-1" to='/home/signup'>Sign-up Page</Link><br /><br />
    <Link id={'tuma'} className="text-decoration-none text-succe ms-1" to='/home/signin'>Sign-in Page</Link><br /><br />
    <Link id={'tuma'} className="text-decoration-none text-prima ms-1" to='/home/chat'>Chat Us 24/7</Link><br /><br />
    <Link id={'tuma'} className="text-decoration-none text-succe ms-1" to='/'>Other Benefit</Link><br /><br />
    <img src={tut1} width="100w" alt="" />
    </div>
    <div className="">    
    <img src={tut1} width="300w" alt="" /> 
    <h1 className="text-success mt-2 ms-1">Focused Tutor</h1>  
    </div>   
    </div>
    </>
    
  )
}

export default Appp