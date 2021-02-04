import React, { useState, useEffect, useRef } from "react";
import './App.css'

function App() {
  const [result, setResult] = useState("");
  const inputRef = useRef(null);
//use ref ka use focus ke liye hota hai and uske liye use useEffect main call krte hain
  useEffect(()=>{
    inputRef.current.focus()


})

  const handleclick=((e)=>{
    setResult(result.concat(e.target.name))



  })

  const backspace=(()=>{

    setResult(result.slice(0,-1))
  })

  const clear=(()=>{
    setResult("")
  })

  const answer=(()=>{
    try{
      setResult(eval(result).toString())

    }catch(error){
      setResult("error")

    }

  })
  return (
    <div>
  
    <div className="calcs-app">
    
        <input type="text" value={result} ref={inputRef}  />
    
      <div className="keypad">
        <button id="clear" onClick={clear}>clear</button>

        <button id="backspace" onClick={backspace}>c</button>

        <button name="1" onClick={handleclick}>1</button>
        <button name="2" onClick={handleclick}>2</button>

        <button name="3" onClick={handleclick}>3</button>

        <button name="4" onClick={handleclick}>4</button>

        <button name="5" onClick={handleclick}>5</button>
        <button name="6"  onClick={handleclick}>6</button>

        <button name="7" onClick={handleclick}>7</button>

        <button name="8"  onClick={handleclick}>8</button>

        <button name="9"  onClick={handleclick}>9</button>
        <button name="0" onClick={handleclick}>0</button>

        <button name="." onClick={handleclick}> .</button>

        <button name="+" onClick={handleclick}>+</button>

        <button name="*" onClick={handleclick}>*</button>
        <button name="/" onClick={handleclick}>/</button>

        <button name="-" onClick={handleclick}>-</button>

        <button id="result" onClick={answer}>Result</button>
      </div>
      </div>
    </div>
   
  );
}

export default App;
