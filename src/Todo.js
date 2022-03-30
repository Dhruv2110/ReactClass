import React, {useState} from 'react'

const Todo = () => {

    const [todo,setTodo] = useState('')
    const [todos,setTodos] = useState([])

    const [mode,setMode] = useState(0)
    const [index,setIndex] = useState(null)
    
    // const [data,setData] = useState({
    //     todo:'',
    //     todos:[],
    //     mode:0,
    //     index:null
    // })

    const btnClick = () => {

        if(todo === '') {

        }
        else {
            if (mode === 0) {
                setTodos([...todos, todo])
                setTodo('')

                // setData({...data,todo:todo})
            }
            else {
                var oldArr = todos
                oldArr.splice(index, 1,todo)
                setTodos([...oldArr])
                // setTodos([...todos.splice(index, 1, todo)])
                setTodo('')
            }
        }
    }

    const btnDelete = (index) => {
        var oldArr = todos
        oldArr.splice(index,1)
        setTodos([...oldArr])
    }

    const btnEdit = (index) => {
        setMode(1)
        setTodo(todos[index])
        setIndex(index)
    }

  return (
    <div>
        <h1>Todo List</h1>
        Enter Todo : <input type='text' value={todo} onChange={(e) => setTodo(e.target.value)}/>
        <button onClick={btnClick}>{mode === 0 ? 'Add' : 'Edit'}</button>

        <ol>
            {
                todos.map(
                    (item,index) => 
                    <div key = {index}>
                            <li >{item}</li>
                            <button onClick={() => btnEdit(index)}>Edit</button>
                            <button onClick={() => btnDelete(index)}>delete</button>
                    </div>
                    )
            }
        </ol>

    </div>
  )
}

export default Todo