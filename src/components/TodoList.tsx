import { useSelector } from "react-redux"

export function TodoList() {
    const todos = useSelector(store => store.todo)
    return (
    <ul>
        {todos.map(todo => {
            return (
                <li key={todo}>{todo}</li>
            )
        })}
    </ul>
    )
}