import styles from './InputToDo.module.css'
import plus from '../../assets/plus.png'
import { useState, ChangeEvent } from 'react'

export function InputToDo() {
  let [todo, setTodo] = useState({
    id: 1,
    content: 'Minha primeira tarefa'
  })
  let [todoList, setTodoList] = useState([todo])

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    setTodo({
      id: todoList.length + 1,
      content: event.target.value
    })
  }

  const handleCreateNewToDo: React.MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault()
    setTodoList([...todoList, todo])
  };
  console.log(todoList)
  return (
    <div className={styles.todoInputContainer}>
      <input onChange={handleNewTodoChange} placeholder='Adicione uma nova tarefa' />
      <button onClick={handleCreateNewToDo}>Criar<img src={plus} /></button>
    </div>

  )
}