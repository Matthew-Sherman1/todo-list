
import React, { useState } from "react";
import './App.css';

import Todo from "./components/Todo"

function App() {
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState([]);

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    if (newTodo.length == 0) {
      return;
    }

  const todoItem = {
    text: newTodo,
    complete: false
  }
    // set todos and pass in a brand new array containing all current todos plust 1 more
    setTodos([...todos, todoItem]);
    setNewTodo("");
  };

  const handleTodoDelete = (delIdx) => {
    const filteredTodos = todos.filter((todo, i) => {
      return i !== delIdx;
    })
    setTodos(filteredTodos)
  }

  const handleToggleComplete = (idx) => {
   const updatedTodos = todos.map((todo,i) => {
     if (idx ==i) {
       todo.complete = !todo.complete;
      //  const updateTodo = {...todo, cp,complete: ! todo.complete}
      //  return updateTodo
     }
     return todo;
   });

   setTodos(updatedTodos);
  }



  return (
    <div style={{textAlign: 'center'}}>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);}}>

        <input onChange={(event) => {
          setNewTodo(event.target.value)
        }}
        
        type='text' 
        value={newTodo}
        />
      <div>
        <button>Add</button>
      </div>
      </form>

        <hr />

      {todos.map((todo,i) => {
      
          return (
          <Todo 
          key={i} 
          todo={todo} 
          handleNewToggleComplete={handleToggleComplete} 
          i={i}
          handleTodoDelete={handleTodoDelete} 
          />
          );
        })}
    </div>
  );
}

export default App;
