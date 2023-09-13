import { memo } from "react"
import { Todo } from "../../model/Todo"

type TodoListItemProps = {
    id: Todo['id']
    title: string
    completed: boolean
    handleCompletedChange: (todoId: Todo['id'], completed: boolean) => void
}

const TodoListItem = (props: TodoListItemProps) => {
    console.log('item rendered')
    const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        props.handleCompletedChange(props.id, e.target.checked)
    }

    return (
        <li>
            <label>
                <input type="checkbox" onChange={handleChange} checked={props.completed} />
                {props.title}
            </label>
        </li>
    )
}

export default memo(TodoListItem)
