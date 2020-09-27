import React,{useState} from 'react'

function AddTodo({handleAdd}) {
    const [input, setInput] = useState('')
    const add=(e)=>{
        e.preventDefault()
        if (input.trim() ===""){
            return alert("Please add a valid task");
        }
        handleAdd(input)
        setInput('')
    }
    return (
       <form className="add-todo-form">
           <h1>My-ToDo-List</h1>
           <div className="input-container">
               <input type="text" value={input} onChange={(e)=>setInput(e.target.value)} />
               <button className="my-btn btn-primary"  onClick={add} >Add </button>
           </div>
           
       </form>
    )
}

export default AddTodo
