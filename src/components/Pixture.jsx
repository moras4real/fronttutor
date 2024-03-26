import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import tut1 from '../assets/Image/tut1.png'
import basePix from './BasePix'
import baseMedia from './BaseMedia'


const Pixture = () => {
  

    const [myfile, setmyfile] = useState("")
    const [myimage, setmyimage] = useState ("")

    // let endpoint7 = 'http://localhost:4250/pix'
    // let endpoint1 = "http://localhost:4250/media"  
    let endpoint7 = basePix
    let endpoint1 = baseMedia

    let navigate = useNavigate() 
    let numb = true   

    const changeFile = (e) => {
        let myImage = e.target.files[0]
        let reader = new FileReader()
        reader.readAsDataURL(myImage)
        reader.onload=()=>{
          console.log(reader.result)
          setmyfile(reader.result)
        }
      }

      const upload = ()=> {
        let details = {myimage}
        console.log(details);   
         
       axios.post (endpoint7, details),
       axios.post (endpoint1,{myfile})
       
       .then((result)=>{
         console.log(result.data)
         setmyimage(result.data.link) 
         if (numb == true) {
            navigate("/home/pix")
        } else {
            navigate('/home/pix')
        }   
        })    
      }

  return (
    <>
 <div className="d-flex ">
            <div className="col-3 ps-2 ">
                    <div className="text-success mt-2 ms-1">The Focused Tutor</div><br />
                    <div className="text-primary ms-1">Features:</div><br />
                    <Link id={'tuma'} className="text-decoration-none text-succe ms-1" to='/home/'>Home Page</Link><br /><br />
                    <Link id={'tuma'} className="text-decoration-none text-succe ms-1" to='/home/signup'>Sign-up Page</Link><br /><br />
                    <Link id={'tuma'} className="text-decoration-none text-succe ms-1" to='/home/signin'>Sign-in Page</Link><br /><br />
                    <Link id={'tuma'} className="text-decoration-none text-prima ms-1" to='/'>Chat Us 24/7</Link><br /><br />
                    <Link id={'tuma'} className="text-decoration-none text-succe ms-1" to='/'>Other Benefit</Link><br /><br />
                    <img src={tut1} width="100w" alt="" />
            </div>

                <div className="col-3 mx auto mt-5 ps-3">
                    <h2>Choose a Profile Picture</h2> 
                
                    <input type="file" onChange={(e)=>changeFile(e)} />              
                    
                    <div className=" mt-5" >
                    <button className="btn btn-success " onClick={upload}>SUBMIT</button>      
                    </div>                 
                </div>
</div>
             <img src={myimage} alt="" />  
               
    </>
  )
}

export default Pixture