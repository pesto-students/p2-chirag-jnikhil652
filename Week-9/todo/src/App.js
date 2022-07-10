import Todo from './todo.js';
// import Input from './input.js';
import './App.css';
import { useState } from 'react';

function App() {
  const [input, setinput] = useState("");
  const [todo, setTodo] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (input === "") {
      return;
    }
    let id = parseInt(Math.random() * 100000);
    setTodo([...todo, { id, name: input, completed: false }]);
    setinput("");
    console.log(todo);
  }

  const completeTodo = (event) => {
    let id = parseInt(event.target.getAttribute("data-id"));
    setTodo(todo.map((element)=>{
      if(id==element.id){
        element.completed = true;
      }
      return element;
    }
    ));
    // setTodo()
  }
  return (
    <>
      <div className="top">
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" value={input} onChange={e => setinput(e.target.value)} />
          <input type="submit" value="Add Todo" />
        </form>
      </div>
      <div className="container">
        <Todo todoList={todo} completeTodo={completeTodo} />
      </div>
    </>
  );
}

export default App;
