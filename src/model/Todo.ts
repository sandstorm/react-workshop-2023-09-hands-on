export type Todo = {
    userId: number
    id: number
    title: string
    completed: boolean
}

export async function fetchTodos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const todos = await response.json()

    // here should happen some kind of data validation (e.g. with type guards, zod or ajv)
    return todos as Array<Todo>
}

export function filterTodosByTitle(todos: Array<Todo>, filterText: string) {
    return todos.filter(todo => todo.title.toLocaleLowerCase().includes(filterText.toLocaleLowerCase()))
}

export function filterOutCompleted(todos: Array<Todo>, shouldFilterOutCompletedTodos: boolean) {
    if (!shouldFilterOutCompletedTodos) {
        return todos
    }

    return todos.filter(todo => !todo.completed)
}