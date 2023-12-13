import React, { useState } from 'react'

function Counter() {
    let [counter, setCounter] = useState(0);
    // let [var_name,setVar] = useState(1);
    function HandleIncreamentCounter(){
        setCounter(++counter);
    }
    function HandleDecreamentCounter(){
        setCounter(--counter);
    }
  return (
    <>
        <p>{counter}</p>
        <button onClick={HandleDecreamentCounter}>decreament</button>
        <button onClick={HandleIncreamentCounter}>increament</button>
    </>
  )
}
export default Counter