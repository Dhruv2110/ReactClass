import React,{useEffect, useState} from 'react'

const Effect = () => {

    const [count1,setCount1] = useState(0)
    const [count2, setCount2] = useState(100)

    //RUNS ON EVERY RENDER
    // useEffect(() => {
    //     console.log("Effect Called on Every Render");
    // })

    //RUNS FIRST TIME ON PAGE LOAD
    // useEffect(() => {
    //     console.log("Runs Only First Time");
    // },[])

    //RUNS ON SOME CHANGE
    useEffect(() => {
        console.log("Runs Only On Condition");
    },[count2])

  return (
    <div>
        <h1>useEffect Hook</h1>
        <h2>Count1 : {count1}</h2>

        <h2>Count2 : {count2}</h2>

        <button onClick={() => {setCount1(count1+1)}}>Increase 1</button>
        <button onClick={() => { setCount2(count2 + 100) }}>Increase 2</button>

    </div>
  )
}

export default Effect