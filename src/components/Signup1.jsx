import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import * as Yup from "yup"
import tut1 from '../assets/Image/tut1.png'
import 'bootstrap/dist/css/bootstrap.css'
import baseU from './BaseU'

const Signup1 = () => {  
  
//   let endpoint = 'http://localhost:4250/signupp'
     let endpoint = baseU
  
  let navigate = useNavigate()
  let numb = true

    let lower = new RegExp(`(?=.*[a-z])`);
    let upper = new RegExp(`(?=.*[A-Z])`);
    let number = new RegExp(`(?=.*[0-9])`);
    let length = new RegExp(`(?=.{9,})`);
    
    
    let formik = useFormik({
        initialValues : {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        },
        
        onSubmit:(values)=>{
            axios.post(endpoint, values)
            .then((response) => { 
                console.log(response)             
                if (numb==true) {
                  navigate('/home/pix')
                } else {
                navigate('/home/signup')
                }

                })
                .catch((err) => {
                    console.log(err)
                })           
        },


        validationSchema: Yup.object({
          firstname: Yup.string()
          .matches(/^[a-z]+$/i,"Must be at least 2 characters").required("This field is required"),
          lastname: Yup.string().matches(/^[a-z]+$/i,"Must be at least 2 characters").required("This field is required"),  
          phone: Yup.string().matches(/^[\d]{10}$/,"Must be a valid phone number").required("This field is required"),  
          email: Yup.string().required("This field is required").email("type valid email address"),
          password: Yup.string().matches(lower,"Must include lowercase letter").matches(upper,"Must include uppercase letter").matches(number,"Must include a number").matches(length, "Must not be less than 9 characters").required("This field is required")
      }),       
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
                <h1 className="text-success text-decoration-underline ">Sing-Up</h1>

                <form action="" onSubmit={formik.handleSubmit}>
                    <div className="my-2 mt-4">
                        <input  type="text" placeholder='Type Firstname here' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.firstname && formik.errors.firstname ? "form-control is-invalid" : "form-control"} value={formik.values.firstname}     name='firstname' />
                    </div>
                    <small className="text-danger" >{ formik.touched.firstname && formik.errors.firstname}</small>

                    <div className="my-2 ">
                        <input  type="text" placeholder='Type Lastname here' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.lastname && formik.errors.lastname ? "form-control is-invalid" : "form-control"} value={formik.values.lastname}     name='lastname' />
                    </div>
                    <small className="text-danger" >{ formik.touched.lastname && formik.errors.lastname}</small>

                    <div className="my-2 ">
                        <input  type="number" placeholder='Phone number' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.phone && formik.errors.phone ? "form-control is-invalid" : "form-control"} value={formik.values.phone}     name='phone' />
                    </div>
                    <small className="text-danger" >{ formik.touched.phone && formik.errors.phone}</small>

                   
                    <div className="my-2 ">
                        <input  type="email" placeholder='mail@gmail.com' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.email && formik.errors.email ? "form-control is-invalid" : "form-control"} value={formik.values.email}     name='email' />
                    </div>
                    <small className="text-danger" >{ formik.touched.email && formik.errors.email}</small>

                    <div className="my-2">
                        <input  type="password" placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' onChange={formik.handleChange} onBlur={formik.handleBlur} className={formik.touched.password && formik.errors.password ? "form-control is-invalid" : "form-control"} value={formik.values.password}     name='password' />
                    </div>
                    <small className="text-danger" >{ formik.touched.password && formik.errors.password}</small>                   
                    
                   
                    <div className="my-2 w-100">
                    <button className="btn btn-success w-100" >SUBMIT</button>      
                    </div>                        
                    
                </form>
            </div>

        </div>
    </>
  )
}

export default Signup1

