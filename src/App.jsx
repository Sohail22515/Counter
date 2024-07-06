import { useState } from 'react' //hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter]=useState(0);//setCounter is just a name

  //
  const addValue=()=>{
    //  console.log("incerease");
    //  counter++;
    setCounter(++counter);
    // console.log(counter);
     
  }
  let decreaseValue=()=>{
    // console.log("decrease");
    //counter--;
    // console.log(counter);
    if(counter>0){setCounter(--counter);} // counter will not go in negative
    
    
  }
  return (
    <>
      <h1>hello world</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>add value</button>
      <br></br>
      <br></br>
      <button onClick={decreaseValue}>decrease vlaue</button>
    </>
  )
}

export default App
