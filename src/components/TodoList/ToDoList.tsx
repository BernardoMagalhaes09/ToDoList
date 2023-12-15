import styles from './ToDoList.module.css'
// import clipboard from '../../assets/Clipboard.png'
const list = [1, 2, 3, 4, 5]
export function ToDoList() {
  return (
    <div className={styles.container}>
      <div className={styles.headerToDoList}>
        <p>Tarefas criadas</p>
        <p>Concluidas</p>
      </div>
      <div className={styles.toDoList}>
        {
          list.map(() => {
            return (
              <div className={styles.content}>
                <div className={styles.check}></div>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro, in doloremque pariatur vitae vero hic, molestias fuga similique, minus earum optio molestiae aut consequuntur. Voluptates alias iste consectetur fugiat odit!</p>
                <p>Lixeira</p>
              </div>
            )
          })
        }
        {/* <img src={clipboard} />
        <strong>Você ainda não tem taredas cadastradas</strong>
        <span>Crie Tarefas e organize seus itens a fazer</span> */}
      </div>
    </div>
  )
}