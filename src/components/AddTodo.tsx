import { useDispatch } from "react-redux/"
import { FormEvent, useState } from "react"
import { add } from "../store"

export function AddTodo() {
    const [newTodo, setNewTodo] = useState("")
    const dispatch = useDispatch()

    function handleFormSubmit(e: FormEvent) {
        e.preventDefault()
        
        dispatch(add({
            newTodo
        }))

        setNewTodo("")
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Criar um todo..."
                value={newTodo}
                onChange={e => setNewTodo(e.target.value)}
            />
            <button type="submit">Adicionar</button>
        </form>
    )
}