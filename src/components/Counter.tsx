import { memo } from "react"
import useCounter from "../hooks/useCounter"

type CounterProps = { 
    initialCount: number
    step?: number
}

const DEFAULT_STEP = 1
  
const Counter = ({ initialCount, step = DEFAULT_STEP }: CounterProps) => {
    const { count, handleDecrement, handleIncrement } = useCounter(initialCount, step)
    
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
