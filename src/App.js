import React, {useState, useRef} from 'react';
import TodoList from './TodoList';
import Headersection from './Headersection';
import './styles.css'

function App() { 
  const[todos, setTodos] = useState([])  
  const[key,setKey] = useState(() =>{
    return 0;
  });           //object destructuring
  const todoNameRef =useRef();
  
  function handleAddTodo(e) {
    
    const name = todoNameRef.current.value;
    if(name ==='') return;
    todoNameRef.current.value = null;
    setTodos(prevTodos =>{
   
      return [...prevTodos,{id:key, name:name, complete: false}]
      
    })
    setKey(prevKey => prevKey +1);
  }
  function toggleTodo(id)
  {
    const newTodos = [...todos];
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete;
    setTodos(newTodos);
  }
  function clearTodo()
  {
    const newTodos = todos.filter(todo => !todo.complete);
    setTodos(newTodos);
  }
  return (
    <>
      <Headersection/>
      <TodoList todos={todos} toggleTodo={toggleTodo}/>
      <input ref={todoNameRef}type = "text"></input>
      <button onClick={handleAddTodo} className="button">Add Todo</button>
      <button onClick={clearTodo} className="button">Clear Todo</button>
      <div className="left-to-do">{todos.filter(todo => !todo.complete).length} Left to do</div>
    </>
  )
}



export default App;
