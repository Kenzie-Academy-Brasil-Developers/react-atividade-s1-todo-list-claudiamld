import { useState } from "react"
import './style.css'

export const Form = ({addTodo}) => {

    const [itemInput, setItemInput] = useState('')

    return (
        <div className="form">
            <input
                placeholder="Adicione uma tarefa"
                onChange={(event) => setItemInput(event.target.value)}
            />
            <button onClick={() => addTodo(itemInput)}>Adicionar tarefa</button>
        </div>
    )
}