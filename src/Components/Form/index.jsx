//RECEBER OS DADOS INSERIDOS NO INPUT
//TER BOTÃO ENVIAR QUE FARÁ ITERAÇÃO NO STATE

import { useState } from "react"

export const Form = ({addTodo}) => {

    const [itemInput, setItemInput] = useState('')

    return (
        <div>
            <input
                onChange={(event) => setItemInput(event.target.value)}
            />
            <button onClick={() => addTodo(itemInput)}>Adicionar tarefa</button>
        </div>
    )
}