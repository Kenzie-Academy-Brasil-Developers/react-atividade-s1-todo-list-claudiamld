//RENDERIZAR AS TAREFAS
//BOTÃO DE CONCLUIR AS TAREFAS

export const TodoList = ({todos, handleTodo}) => {
    return(
        <ul>
            {todos.map((item) => {
                return (
                    <li>
                        <h3>{item}</h3>
                        <button onClick={() => handleTodo(item)}>Concluir tarefa</button>
                    </li>
                )
            })}
            
        </ul>
    )
}