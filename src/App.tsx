import { Header } from "./components/Header/Header"
import { InputToDo } from "./components/InputToDo/InputToDo"
import { ToDoList } from "./components/TodoList/ToDoList"
import './global.css'

function App() {

  return (
    <div>
      <Header />
      <InputToDo />
      <ToDoList />
    </div>
  )
}

export default App
