import { useState } from "react"

export default function TodoInputprops(props) {
    const {handleAddTodos} = props
    const [todoValue, setTodoValue] = useState('')
    return (
        <header>
            <input value={todoValue} onChange={(e) => {
                setTodoValue(e.target.value)
            }} placeholder="Enter todo..." />
            <button onClick={() => {
                handleAddTodos(todoValue)
                setTodoValue('')
            }}>Add</button>
        </header>
    )
}