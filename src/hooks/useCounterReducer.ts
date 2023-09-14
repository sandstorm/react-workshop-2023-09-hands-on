/*
    ## 8. Counter mit useReducer()
    1. baue deinen useCounter hook so um, dass er statt `useState()` `useReducer()` verwendet
    2. Die reducer function soll pure und ausserhalb des custom hooks definiert sein (kann aber in der gleichen Datei liegen)
    _Das Verhalten des Counters soll dabei unverändert bleiben_
*/

import { useReducer } from 'react'

type CounterState = {
    count: number
}

const createIncrementAction = (amount: number) =>
    ({ type: 'INCREMENT', payload: { amount } }) as const
const createDecrementAction = () => ({ type: 'DECREMENT' }) as const

type IncrementAction = ReturnType<typeof createIncrementAction>
type DecrementAction = ReturnType<typeof createDecrementAction>

function counterReducer(
    state: CounterState,
    action: IncrementAction | DecrementAction
) {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + action.payload.amount,
            }
        }

        case 'DECREMENT': {
            return {
                ...state,
                count: state.count - 1,
            }
        }

        default: {
            return state
        }
    }
}

const useCounterReducer = (initialCount: number) => {
    const [state, dispatch] = useReducer(counterReducer, {
        count: initialCount,
    })

    const incrementBy = (amount: number) => {
        dispatch(createIncrementAction(amount))
    }

    return {
        count: state.count,
        incrementBy,
    }
}

export default useCounterReducer
