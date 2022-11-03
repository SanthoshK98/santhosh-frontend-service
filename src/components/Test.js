
import React,{useState, useEffect}from 'react'
function Test() {
  const [data,setData]=useState("Anil")
  const [test, setTest] = useState("Do It")
  useEffect(()=>{
    console.log("useEffect before setTimeout")
    setTest("Hello")
    setTimeout(()=>{
      console.log("useEffect Timeout")
      setTest("World")
    },5000)
  },[])
  return (
    <div>
      <h1>Hooks in React {data}</h1>
      <h1>useEffect: {test}</h1>
      <button onClick={()=>setData("Peter")}>Update State</button>
    </div>
  );
}

export default Test;