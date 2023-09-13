import { useCallback, useEffect, useId, useMemo, useState } from "react"
import TodoListItem from "./TodoListItem"
import { Todo, fetchTodos, filterOutCompleted, filterTodosByTitle } from "../../model/Todo"

const TodoList = () => {
    const [todos, setTodos] = useState<Array<Todo>>([])
    const [filterText, setFilterText] = useState('')
    const [filterCompleted, setFilterCompleted] = useState(false)
    
    // only for demonstration of useMemo
    const [tick, setTick] = useState(false)
    useEffect(
        () => {
            const interval = setInterval(() => setTick(currentTick => !currentTick), 500)

            return () => clearInterval(interval)
        },
        [],
    )
    
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

    const todosFilteredByCompleted = useMemo(
        () => {
            console.log('filter by completed')
            return filterOutCompleted(todos, filterCompleted)
        },
        [todos, filterCompleted],
    )

    const todosFilteredByTitleAndCompletedStatus = useMemo(
        () => {
            console.log('filter by title')
            return filterTodosByTitle(todosFilteredByCompleted, filterText)
        },
        [todosFilteredByCompleted, filterText],
    )

    const handleToggleCompleted = useCallback(
        (todoId: Todo['id'], completed: boolean) => {
            const updatedTodos = todos.map(todo => {
                if (todo.id === todoId) {
                    return {
                        ...todo,
                        completed: completed,
                    }
                }

                return todo
            })

            setTodos(updatedTodos)
        },
        [todos]
    )

    return (
        <div>
            <p>{tick ? 'tick' : 'tock'}</p>
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
                {todosFilteredByTitleAndCompletedStatus.map(todo => 
                    <TodoListItem
                        key={todo.id} 
                        id={todo.id}
                        completed={todo.completed}
                        title={todo.title}
                        handleCompletedChange={handleToggleCompleted}
                    />
                )}
            </ul>
        </div>
    )
}

export default TodoList
