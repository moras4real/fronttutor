import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

const Chat = ({socket}) => {
    const [message, setmessage] = useState("")
    const [allmessages, setallmessages] = useState([])    
    useEffect(()=>{      
        if(socket){
            socket.on("broadcastMsg",(receivedMessage)=>{
              setallmessages([...allmessages,receivedMessage])
                console.log(receivedMessage)
            })
        }      
    })
    const sendMessage = ()=>{
        console.log(message)
        // console.log(socket);
        socket.emit("sendMsg",message);
        setmessage("")        
    }

  return (
    <>
    <div className="mt-5 container-fluid col-7 mx-auto">
      <Link to='/home'>"Go back home"</Link>

      <div className="mt-3" >    
        {allmessages.map((msg)=>( 
          <div key={msg} className="text-success">
            {msg}
          </div>
        ))}    
      </div>  

      <input type="text" onChange={(e)=>setmessage(e.target.value)} value={message}/>
      <button onClick={sendMessage}>Chat-Me</button>  
      
    </div>
    </>
  )
}

export default Chat


