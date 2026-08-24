import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";
import "./App.css";

function App() {
  return (
    <center classNameName="todo-container">
      <div classNameName="container">
        <AppName />
        <AddTodo />
        <div classNameName="items-container">
          <TodoItem1></TodoItem1>
          <TodoItem2></TodoItem2>
        </div>
      </div>
    </center>
  );
}

export default App;
