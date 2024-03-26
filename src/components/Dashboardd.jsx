import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'


// useStateSnippet
// useEffectSnippet

// let endpoint5 = 'http://localhost:4250/edit'
// let endpoint6 = 'http://localhost:4250/update'

const Dashboardd = () => { 
  let navigate = useNavigate()
  let token = localStorage.token

  let endpoint3 = 'http://localhost:4250/dashboard'
  let endpoint4 = 'http://localhost:4250/delete'


    const [info,setinfo] = useState([])

    const [firstname, setfirstname] = useState("")
    const [lastname, setlastname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")
    // const [studentArr, setstudentArr] = useState([])

    const [isEdit, setisEdit] = useState(false)
    const [toEdit, settoEdit] = useState(false)
 

  useEffect(() => {    
    axios.get(endpoint3,{
      headers:{
        "Authorization" : `Bearer ${token}`,
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then ((result)=>{
      setinfo(result.data)      
    })
    .catch ((err)=>{
      if(err){
        localStorage.removeItem("token") 
        navigate("/signin")      
      }
    })
  })
  
  const deleteDetails = (email) => {
    let sport={email}
    console.log(sport);

    axios.post(endpoint4,sport)
    .then((result)=>{
      console.log(result.data) 
         
    })
    .catch ((error)=>{
      console.log(error)
    })
  }

//   const submitDetails = () => {
//     let details = {firstname, lastname, email, password}
//     console.log(details);
//     console.log(firstname, lastname, email, password);
//     setinfo([...info,details])
//     console.log(info);
//     setfirstname("")
//     setlastname("")
//     setemail("")
//     setpassword("")       
// }
//   const editDetails = (index)=>{      
//     let show = info[index]
//     setfirstname(show.firstname)
//     setlastname(show.lastname)
//     setemail(show.email)
//     setpassword(show.password)
//     setisEdit(true)
//     toEdit(true)
// }

// const edit =()=>{  
//   axios.post(endpoint6)
//   let details = {firstname, lastname, email, password}
//   setinfo(info.map((item, index)=> (index == toEdit ? details : user)))
//   settoEdit(false)
//   setisEdit(null)
//   setfirstname("")
//   setlastname("")
//   setemail("")
//   setpassword("")               
// }
  
  return (
    <>
        {/* <div className="form-floating my-3">
                    <input type="text" placeholder='Firstname' className='form-control' onChange={(e) => setfirstname(e.target.value)} 
                    value={firstname}
                    />
                    <label htmlFor="Firstname">Firstname</label>
                </div>
                <div className="form-floating my-3">
                    <input type="text" placeholder='Firstname' className='form-control' onChange={(e) => setlastname(e.target.value)} 
                    value={lastname}
                    />
                    <label htmlFor="Lastname">Lastname</label>
                </div>
                <div className="form-floating my-3">
                    <input type="text" placeholder='Firstname' className='form-control' onChange={(e) => setemail(e.target.value)} 
                    value={email}
                    />
                    <label htmlFor="Lastname"><i className="fa fa-exclamation-triangle" aria-hidden="true">Email</i></label>
                </div>
                <div className="form-floating my-3">
                    <input type="text" placeholder='Firstname' className='form-control' onChange={(e) => setpassword(e.target.value)} 
                    value={password}
                    />
                    <label htmlFor="Firstname">Password</label>
                </div>
                <div className="my-3">
                    <button className="btn btn-primary w-100" onClick={isEdit ? edit : submitDetails}>{isEdit ? "EDIT" : "SUBMIT"}</button>
                             
                </div>                          */}
           
 
    
     <h1>Wellcome             
    <div className="table table-dark  ">              
                {                  
                    info.map((item,index)=>(                   
                          <img src={item.myimage} width="50px" alt="" />                         
                    ))                    
                }
    </div>  
    </h1>


    <h1 className="text-success ms-5">The Focus Tutor</h1> 
                
    <table className="table table-dark  ">
                <thead>
                    <tr >
                        <th className="text-success">S/N</th>
                        <th className="text-success">First Name</th>
                        <th className="text-success">Last Name</th>
                        <th className="text-success">Email</th>
                        <th className="text-success">Password</th>
                        <th className="text-success">Image</th>
                        <th className="text-success">Actions</th>                        
                    </tr>
                </thead>
                {
                  
                    info.map((item,index)=>(
                    <tbody>                            
                        <tr key={index}>
                            <td>{index +1}</td>
                            <td className="text-info">{item.firstname}</td>
                            <td>{item.lastname}</td>
                            <td className="text-primary">{item.email}</td>
                            <td>{item.password}</td>
                            <td>    
                          <img src={item.myimage} width="50px" alt="" />                    
                                <button className="btn btn-danger btn-sm" onClick= {() => deleteDetails(item.email)}>Delete</button>
                                <button className="btn btn-warning btn-sm" onClick= {() => editDetails(index)}>Edit</button>
                            </td>
                        </tr>
                    </tbody>
                    ))                    
                }
            </table>  
                                    
    </>
  )
}

export default Dashboardd