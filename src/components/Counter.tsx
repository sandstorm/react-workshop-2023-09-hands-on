import { memo, useCallback } from 'react'
import useCounter from '../hooks/useCounter'

type CounterProps = {
    initialCount: number
    step?: number
}

const DEFAULT_STEP = 1

const Counter = ({ initialCount, step = DEFAULT_STEP }: CounterProps) => {
    const { count, handleDecrement, handleIncrement } = useCounter(
        initialCount,
        step
    )

    const handleMyOwnDecrement = useCallback(() => {
        // ...
        handleDecrement()
    }, [handleDecrement])

    return (
        <div className="counter">
            <p>Count: {count}</p>
            <button onClick={handleMyOwnDecrement}>-</button>
            <button onClick={handleIncrement}>+</button>
        </div>
    )
}

export default memo(Counter)
