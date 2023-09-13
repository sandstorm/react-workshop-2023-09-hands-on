import { memo } from "react"
import useCounter from "../hooks/useCounter"

type CounterProps = {
    initialCount: number
    step?: number
}

const Counter = (props: CounterProps) => {
    const { count, handleDecrement, handleIncrement } = useCounter(props.initialCount)

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
