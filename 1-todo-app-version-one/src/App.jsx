import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import TodoItem1 from "./Components/TodoItem1";
import TodoItem2 from "./Components/TodoItem2";

function App() {
  return (

    <center className="todo-container">
      <div className="container text-center">
        <AppName />
        <AddTodo />
        <TodoItem1></TodoItem1>
        <TodoItem2></TodoItem2>
      </div>
    </center>
    
  );
}

export default App;
