import axios from 'axios';
import { useFormik } from 'formik';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'
import * as Yup from "yup"
import tut1 from '../assets/Image/tut1.png'
import 'bootstrap/dist/css/bootstrap.css'
import baseUr from './BaseUr';

const Signnn = () => {

    // let endpoint2 = 'http://localhost:4250/signin'
    let endpoint2 = baseUr

    let navigate = useNavigate()    

    let formik = useFormik({
        initialValues: {
            email: '',
            password: ''
        },

        onSubmit: (values) => { 
            axios.post(endpoint2, values)
            .then((response)=>{
                console.log(response.data.message)                
                if (response.data.message=='user found'){
                    localStorage.token = response.data.token
                    navigate("/dashboard")
                  } 
                  else {
                    navigate('/signin')
                  }           
            })
            // console.log(values);
        },

        validationSchema: Yup.object({
            email: Yup.string().required("This field is required"),
            password: Yup.string().required("This field is required")
        })
    })
    return (
        <>
        <div className="d-flex">
            <div className="col-3 ps-2">
                    <div className="text-success mt-2 ms-1">The Focused Tutor</div><br />
                    <div className="text-primary ms-1">Features:</div><br />
                    <Link id={'tuma'} className="text-decoration-none text-succe ms-1" to='/home/'>Home Page</Link><br /><br />
                    <Link id={'tuma'} className="text-decoration-none text-succe ms-1" to='/home/signup'>Sign-up Page</Link><br /><br />
                    <Link id={'tuma'} className="text-decoration-none text-succe ms-1" to='/home/signin'>Sign-in Page</Link><br /><br />
                    <Link id={'tuma'} className="text-decoration-none text-prima ms-1" to='/home/chat'>Chat Us 24/7</Link><br /><br />
                    <Link id={'tuma'} className="text-decoration-none text-succe ms-1" to='/'>Other Benefit</Link><br /><br />
                    <img src={tut1} width="100w" alt="" />
            </div>

            <div className="col-lg-5 col-md-12 col-sm-12  mt-5  text-center ps-3 ">
                <h1 className="text-success text-decoration-underline ">Sign-In</h1>

                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="my-2 mt-4">
                        <input  type="email" placeholder='Type Email here' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"} value={formik.values.email}     name='email' />
                    </div>
                    <small className="text-danger" >{ formik.touched.email && formik.errors.email}</small>

                    <div className="my-2">
                        <input  type="password" placeholder='Type Password here' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"} value={formik.values.password}     name='password' />
                    </div>
                    <small className="text-danger" >{ formik.touched.password && formik.errors.password}</small>                   
                    <div>
                        <div className="mt-5"></div>
                        <button className="btn btn-success">Log In</button>                        
                    </div>
                </form>
            </div>

        </div>
        
        </>

    )
}

export default Signnn
