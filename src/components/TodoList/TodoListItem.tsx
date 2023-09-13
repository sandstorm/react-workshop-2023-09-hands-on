type TodoListItemProps = {
    title: string
    completed: boolean
}

const TodoListItem = (props: TodoListItemProps) => (
    <li>
        <label>
            <input type="checkbox" readOnly checked={props.completed} />
            {props.title}
        </label>
    </li>
)

export default TodoListItem
