const Todo = (props) => {


    const todoClasses = ['bold'];
    if (props.todo.complete) {
      todoClasses.push("line-through")
    }

    return ( <div key ={i}>
    <input onChange={(event) =>{
      handleToggleComplete(props.i);
    }} checked={props.todo.complete} type = "checkbox"/>
    <span className = {todoClasses.join(" ")}>{props.todo.text}</span>
    <button onClick = {(event) => {
      handleTodoDelete(props.i)
    }}>Delete</button>
  </div>
  );
}

export default Todo;