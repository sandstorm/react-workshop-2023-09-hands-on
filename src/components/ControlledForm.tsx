import React, { useState } from 'react'

type FormValues = {
    firstName: string
    lastName: string
    age: number
}

const ControlledForm = () => {
    const {
        formState,
        handleAgeChange,
        handleFirstNameChange,
        handleLastNameChange,
    } = useFormState()

    return (
        <form>
            <input
                className="firstName"
                type="text"
                value={formState.firstName}
                onChange={handleFirstNameChange}
            />
            <input
                className="lastName"
                type="text"
                value={formState.lastName}
                onChange={handleLastNameChange}
            />
            <input
                className="age"
                type="number"
                value={formState.age}
                onChange={handleAgeChange}
            />
        </form>
    )
}

// this is just an example! Put hooks into it's own file
const useFormState = () => {
    const [formState, setFormState] = useState<FormValues>({
        firstName: '',
        lastName: '',
        age: 0,
    })

    const handleAgeChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setFormState({
            ...formState,
            age: parseInt(e.target.value),
        })
    }

    const handleFirstNameChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        setFormState({
            ...formState,
            firstName: e.target.value,
        })
    }

    const handleLastNameChange: React.ChangeEventHandler<HTMLInputElement> = (
        e
    ) => {
        setFormState({
            ...formState,
            lastName: e.target.value,
        })
    }

    return {
        formState,
        handleAgeChange,
        handleFirstNameChange,
        handleLastNameChange,
    }
}

export default ControlledForm
