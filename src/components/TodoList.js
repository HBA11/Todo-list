import React from 'react';
import Task from './Task';

const TodoList = ( {todos,handleDelete,handleComplete, edittodo}) => {
    return (
        <ul className="todo-list">
            {todos.map(todo=>
                <Task 
                edittodo={edittodo}
                key={todo.id} 
                todo={todo} 
                handleDelete={handleDelete} 
                handleComplete={handleComplete}/>
                )}
        </ul>
    );
};

export default TodoList
