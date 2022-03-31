import './style.css'
import Trash from './../../assets/trash.svg'

export const TodoList = ({todos, handleTodo}) => {
    return(
        <ul>
            {todos.map((item) => {
                return (
                    <li>
                        <h3>{item}</h3>
                        <button className='concluded-button' onClick={() => handleTodo(item)}><img src={Trash} alt='lixeira' /></button>
                    </li>
                )
            })}         
        </ul>
    )
}