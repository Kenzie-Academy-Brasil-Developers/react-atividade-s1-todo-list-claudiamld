import './App.css';
import { useState } from 'react';
import {Form} from './Components/Form'
import {TodoList} from './Components/TodoList'

function App() {

  const [todos, setTodos] = useState([])

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo])
  }

  const handleTodo = (todoItem) => {
    const newArr = todos.filter((item) => item !== todoItem)
    setTodos(newArr)
  }

  return (
    <div className="App">
      <header className="App-header">
        <Form addTodo={addTodo}/>
        <TodoList todos={todos} handleTodo={handleTodo} />
      </header>
    </div>
  );
}

export default App;
