import styles from './ToDoList.module.css'
import clipboard from '../../assets/Clipboard.png'
const list: string[] = ['Deletar', 'Deletar', 'Deletar']

export function ToDoList() {

  if (list.length == 0) {
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

  return (
    <div className={styles.container}>
      <div className={styles.headerToDoList}>
        <p>Tarefas criadas</p>
        <p>Concluidas</p>
      </div>
      <div className={styles.toDoList}>
        {
          list.map(item => (
            <div className={styles.content}>
              <div className={styles.check}></div>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, in doloremque pariatur vitae vero hic, molestias fuga similique, minus earum optio molestiae aut consequuntur. Voluptates alias iste consectetur fugiat odit!</p>
              <p>{item}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}