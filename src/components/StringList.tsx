type StringListProps = {
    listOfStrings: Array<string>
}

const StringList = (props: StringListProps) => (
    <ul>
        {props.listOfStrings.map((listElement, index) => (
            <li key={index}>{listElement}</li>
        ))}
    </ul>
)

export default StringList
