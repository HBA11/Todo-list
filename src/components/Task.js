import React from 'react';
import EditModal from './EditModal'

const Task = ({todo,handleDelete,handleComplete, edittodo}) => {
    console.log(todo)
    return (
        <div>
            <li className="todo-card">
                <input type="checkbox" onClick={()=>handleComplete(todo.id)} style={{marginLeft:20 }} />
    <span className="todo-text" style={todo.isCompleted? {textDecoration:"line-through"}:{}}>{todo.text}</span>
                <button className="my-btn btn-danger" onClick={()=>handleDelete(todo.id)}  >Delete</button>
                
                <EditModal todo={todo} edittodo={edittodo} />
            </li>
        </div>
    )
}

export default Task
