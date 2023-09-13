import { useState } from "react"

const useCounter = (initialCount: number, step: number) => {
    const [count, setCount] = useState(initialCount)

    const handleIncrement = () => {
        // set new state via function (currentValue => newValue)
        setCount(currentCount => currentCount + (step))
    }

    const handleDecrement = () => {
        // set state directly with new value
        setCount(count - (step))
    }

    return {
        count,
        handleDecrement,
        handleIncrement,
     } as const
}

export default useCounter
