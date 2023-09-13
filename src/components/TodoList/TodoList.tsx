import { useEffect, useState } from "react"
import TodoListItem from "./TodoListItem"
import { Todo, fetchTodos } from "../../model/Todo"

const TodoList = () => {
    const [todos, setTodos] = useState<Array<Todo>>([])

    useEffect(
        // function with side effects to run
        () => { fetchTodos().then(setTodos) },
        // "dependency array" - when to run it
        [setTodos],
    )

    return (
        <div>
            <h2>Todos</h2>
            <ul>
                {todos.map(todo => 
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
