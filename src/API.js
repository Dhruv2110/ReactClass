import React,{useEffect,useState} from 'react'
import axios from 'axios'

const API = () => {

    const [info,setInfo] = useState([])

    const [name, setName] = useState('')
    const [age, setAge] = useState(0)

    useEffect(() => {
        // fetch('http://localhost:8500/getdata')
        //     .then(response => response.json())
        //     .then(data => setInfo(data));

        axios.get('http://localhost:8500/getdatau')
            .then(res => setInfo(res.data))

    },[])

    const frmSubmit = (e) => {
        e.preventDefault()

        axios.post('http://localhost:8500/savedata',{name,age})
        .then(res => console.log(res.data))
    }

  return (
    <div>
        <h1>API Integration</h1>

        <form onSubmit={frmSubmit}>
              Enter Your Name : <input type='text' value={name} onChange={(e) => setName(e.target.value)} /><br />
              Enter Age : <input type='text' value={age} onChange={(e) => setAge(e.target.value)} /><br />
                <input type='submit' value='Save' />
        </form>



        {/* {
            info.map((item,index) => 
            <div key={index}>
                <h1>Name : {item.name}</h1>
                <h2>Age : {item.age}</h2>
            </div>)
        } */}
    </div>
  )
}

export default API