
import "./components/todo/todo.css";
import TodoNew from "./components/todo/TodoNew";
import TodoData from "./components/todo/TodoData";
import reactLogo from "./assets/react.svg";
import { useState } from "react";
// () => { }

const App = () => {
  const [todoList, setTodoList] = useState([
    // { id: 1, name: "Learning React" },
    // { id: 2, name: "Watching youtube" }
  ]);

  const addNewTodo = (name) => {
    const newToDo = {
      id: randomIntFromInterval(1, 1000000),
      name: name
    }
    setTodoList([...todoList, newToDo])
  }
  const randomIntFromInterval = (min, max) => { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


  //{key: value}
  return (
    <div className="todoContainer">
      <div className="todoTitle">Todo List</div>
      <TodoNew
        addNewTodo={addNewTodo}
      />

      {todoList.length > 0 ?
        <TodoData
          todoList={todoList}
        />
        :
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      }
      {/* {todoList.length > 0 &&
        <TodoData
          todoList={todoList}
        />
      }

      {todoList.length === 0 &&
        <div className="todo-image">
          <img src={reactLogo} className="logo" />
        </div>
      } */}

    </div>
  )
}

export default App
