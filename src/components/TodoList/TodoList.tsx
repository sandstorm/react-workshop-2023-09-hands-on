import { useEffect, useId, useState } from "react"
import TodoListItem from "./TodoListItem"
import { Todo, fetchTodos, filterOutCompleted, filterTodosByTitle } from "../../model/Todo"

const TodoList = () => {
    const [todos, setTodos] = useState<Array<Todo>>([])
    const [filterText, setFilterText] = useState('')
    const [filterCompleted, setFilterCompleted] = useState(false)
    
    const filterTextInputId = useId()
    const filterCompletedInputId = useId()

    useEffect(
        // function with side effects to run
        () => { fetchTodos().then(setTodos) },
        // "dependency array" - when to run it
        [setTodos],
    )

    const handleFilterTextChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFilterText(e.target.value)
    }

    const handleFilterCompletedChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFilterCompleted(e.target.checked)
    }

    const filteredTodos = filterOutCompleted(filterTodosByTitle(todos, filterText), filterCompleted)

    return (
        <div>
            <h2>Todos</h2>
            <div>
                <label htmlFor={filterTextInputId}>filter: </label>
                <input id={filterTextInputId} value={filterText} onChange={handleFilterTextChange} />
            </div>
            <div>
                <input id={filterCompletedInputId} type="checkbox" checked={filterCompleted} onChange={handleFilterCompletedChange} />
                <label htmlFor={filterCompletedInputId}>filter out completed</label>
            </div>
            <ul>
                {filteredTodos.map(todo => 
                    <TodoListItem 
                        key={todo.id} 
                        completed={todo.completed}
                        title={todo.title}
                    />
                )}
            </ul>
        </div>
    )
}

export default TodoList
