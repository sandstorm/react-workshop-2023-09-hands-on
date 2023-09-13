import { useState } from "react"

const useCounter = (initialCount: number) => {
    
    const [count, setCount] = useState(initialCount)

    const handleIncrement = () => {
        // set new state via function (currentValue => newValue)
        setCount(currentCount => currentCount + 1)
    }

    const handleDecrement = () => {
        // set state directly with new value
        setCount(count - 1)
    }

    return {
        count,
        handleDecrement,
        handleIncrement,
     } as const
}

export default useCounter
