import React,{useState} from 'react'

const Input = () => {

    const [name,setName] = useState('')
    const [age,setAge] = useState(0)

  return (
      <>
        <h1>Input</h1>
          Enter Your Name : <input type='text' value={name} onChange={(e) => setName(e.target.value)}/><br/>
          Enter Age : <input type='text' value={age} onChange={(e) => setAge(e.target.value)} /><br/>
          Name : {name} & Age : {age}
      </>
  )
}

export default Input