import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import TodoListItem from './TodoListItem'
import {
    Todo,
    fetchTodos,
    filterOutCompleted,
    filterTodosByTitle,
    updateTodoCompleted,
} from '../../model/Todo'

const TodoList = () => {
    const [todos, setTodos] = useState<Array<Todo>>([])
    const [filterText, setFilterText] = useState('')
    const [filterCompleted, setFilterCompleted] = useState(false)
    const filterTextRef = useRef<HTMLInputElement>(null)

    // create unique ids for aria purposes
    const filterTextInputId = useId()
    const filterCompletedInputId = useId()

    useEffect(
        // function with side effects to run
        () => {
            fetchTodos().then(setTodos)
        },
        // "dependency array" - when to run it
        [setTodos]
    )

    const handleFilterTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFilterText(e.target.value)
    }

    const handleFilterCompletedChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        setFilterCompleted(e.target.checked)
    }

    // cache filtered todos to prevent filter function to run on every render of TodoList
    const todosFilteredByCompleted = useMemo(() => {
        // logging for show case of memo
        console.log('run filter by completed')

        return filterOutCompleted(todos, filterCompleted)
    }, [todos, filterCompleted])

    const todosFilteredByTitleAndCompletedStatus = useMemo(() => {
        // logging for show case of memo
        console.log('filter by title')

        return filterTodosByTitle(todosFilteredByCompleted, filterText)
    }, [todosFilteredByCompleted, filterText])

    // cache handler to prevent re-rendering of all TodoListItems on every render of TodoList
    const handleToggleCompleted = useCallback(
        (todoId: Todo['id'], completed: boolean) => {
            // use set-function to remove the dependency on "todos" so we do not update this cached
            // function when we change a todo!
            // setTodos(updateTodoCompleted(todoId, completed, todos))
            setTodos((currentTodos) =>
                updateTodoCompleted(todoId, completed, currentTodos)
            )
        },
        [setTodos]
    )

    // only for demonstration of useMemo
    const [tick, setTick] = useState(false)
    useEffect(() => {
        const interval = setInterval(
            () => setTick((currentTick) => !currentTick),
            1000
        )

        return () => clearInterval(interval)
    }, [])

    // focus the input element on first render
    useEffect(() => {
        if (filterTextRef.current) {
            filterTextRef.current.focus()
        }
    }, [filterTextRef])

    return (
        <div>
            <p>{tick ? 'tick' : 'tock'}</p>
            <h2>Todos</h2>
            <div>
                <label htmlFor={filterTextInputId}>filter: </label>
                <input
                    ref={filterTextRef}
                    id={filterTextInputId}
                    value={filterText}
                    onChange={handleFilterTextChange}
                />
            </div>
            <div>
                <input
                    id={filterCompletedInputId}
                    type="checkbox"
                    checked={filterCompleted}
                    onChange={handleFilterCompletedChange}
                />
                <label htmlFor={filterCompletedInputId}>
                    filter out completed
                </label>
            </div>
            <ul>
                {todosFilteredByTitleAndCompletedStatus.map((todo) => (
                    <TodoListItem
                        key={todo.id}
                        id={todo.id}
                        completed={todo.completed}
                        title={todo.title}
                        handleCompletedChange={handleToggleCompleted}
                    />
                ))}
            </ul>
        </div>
    )
}

export default TodoList
