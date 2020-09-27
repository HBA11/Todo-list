import React , {useState} from 'react';
import './App.css';
import AddTodo from './components/AddTodo';
import TodList from './components/TodoList';


function App() {
  const [todos, settodos]= useState([
    { isCompleted:false,text:"My first to do" , id:0 },
    { isCompleted:false,text:"My second to do" , id:1 }
  ]);
  // 11111111111111  Add
  const handleAdd=(textInput)=>{
    settodos([...todos,{isCompleted:false,text:textInput ,id:Math.random()}])
  }
// Delete
  const handleDelete=(indice)=>{
    settodos(todos.filter(todo=> todo.id!==indice))
  
  }
  const handleComplete=(id)=>{
    settodos(todos.map(todo=> (todo.id===id)?{...todo,isCompleted:!todo.isCompleted} : todo))
  }

  //edit todo
  const edittodo = (id, newText) => {
    settodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText } : todo))
    );
  };

  return (
    <div className="App">
      {/* 2222222222222222222 */}
   <AddTodo handleAdd={handleAdd} />
   <TodList todos={todos} handleDelete={handleDelete} handleComplete={handleComplete} edittodo={edittodo} />
   <br/>
   <br/>
   <br/>
   <br/>
   <br/>
   <footer >
      <h6 style={{textAlign:"center" }}>Copyright - © </h6>
  </footer>
    </div>
  );
}

export default App;
