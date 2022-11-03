import './App.css';
import React,{useState, useEffect}from 'react'
import { io } from 'socket.io-client';



function App() {
  const socket = io.connect("http://localhost:5000")
  const sendMessage = ()=>{
    socket.emit("send_message",{message:"Hello"})
  }
  useEffect(()=>{
    socket.on("receive_message",(data)=>{
      alert(data.message)
    })
  },[socket])
  return (
    <div className="App">
      <h1>Hello React</h1>
      <input placeholder='Message......'/>
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default App;
