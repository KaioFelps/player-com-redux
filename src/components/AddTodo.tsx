import { FormEvent, useState } from "react"

export function AddTodo() {
    const [newTodo, setNewTodo] = useState("")

    function handleFormSubmit(e: FormEvent) {
        e.preventDefault()

        console.log(newTodo)
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