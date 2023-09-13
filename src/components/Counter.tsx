import { memo, useState } from "react"

type CounterProps = {
    initialCount: number
    step?: number
}

const DEFAULT_STEP = 1

const Counter = (props: CounterProps) => {
    const [count, setCount] = useState(props.initialCount)
    const step = props.step ?? DEFAULT_STEP

    const handleIncrement = () => {
        setCount(count => count + step)
    }

    const handleDecrement = () => {
        setCount(count - step)
    }

    return (
        <div className="counter">
            <p>Count: {count}</p>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

const MemoizedCounter = memo(Counter)

export default MemoizedCounter
