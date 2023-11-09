import styles from './ToDoList.module.css'
import clipboard from '../../assets/Clipboard.png'

export function ToDoList() {
  return (
    <div className={styles.container}>
      <div className={styles.headerToDoList}>
        <p>Tarefas criadas</p>
        <p>Concluidas</p>
      </div>
      <div className={styles.toDoList}>
        <img src={clipboard} />
        <strong>Você ainda não tem taredas cadastradas</strong>
        <span>Crie Tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  )
}