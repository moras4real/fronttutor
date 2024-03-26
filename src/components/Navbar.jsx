import React from 'react'
import { Link } from 'react-router-dom'
import tut1 from '../assets/Image/tut1.png'
import 'bootstrap/dist/css/bootstrap.css'

const Navbar = () => {
  return (
    <>
    <div className=''>
        <nav className="navbar bg-body-white">        
              <div className="container"><div>  
              <img src={tut1} width="50w" alt="" />              
                <span className="nav-item dropdown ms-3">
                    <a className="navbar-brand  text-decoration-none text-success fw-bold" data-bs-toggle="dropdown" aria-expanded="false">
                    Visit The Focused Tutor
                    </a>           
                </span>
                
                </div>      
                  <button className="btn btn-outline-secondary  btn-success border-2 border-light" type=""> <Link className="text-decoration-none fw-bold text-white" to='/home/signup'>Create an account</Link></button>
                  <span className="pe-5 me-5" id={'tuma'}>already have an account?</span>
                  <button className="btn btn-outline-secondary  btn-success "><Link className="text-decoration-none fw-bold text-white" to='/home/signin'>Sign-in</Link> </button>  
                </div>
        </nav>
    </div>
    </>
    
  )
}

export default Navbar