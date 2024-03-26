import React from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const Errorpage = () => {
  return (
    <>
    <div className="mt-5 container-fluid col-7 mx-auto ">
    <Link to='/home'>"Go back home"</Link>
    </div>
    </>
  )
}

export default Errorpage