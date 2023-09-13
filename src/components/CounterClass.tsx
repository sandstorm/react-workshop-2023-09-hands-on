import React from 'react'

type CounterProps = {
    initialCount: number, 
    step?: number
}

type CountState = {
    count: number
}

const DEFAULT_STEP = 1

class CounterClass extends React.PureComponent<CounterProps, CountState> {
    constructor(props: CounterProps) {
        super(props)

        this.state = { count: props.initialCount }

        // when not using arrow functions for methods you have to bind "this"
        this.handleDecrement = this.handleDecrement.bind(this)
    }

    handleIncrement = () => {
        this.setState({ count: this.state.count + (this.props.step ?? DEFAULT_STEP) })
    }

    handleDecrement() {
        this.setState({ count: this.state.count - (this.props.step ?? DEFAULT_STEP) })
    }

    render() {
        return (
            <div className="counter">
                <p>count: {this.state.count}</p>
                <button onClick={this.handleDecrement}>-</button>
                <button onClick={this.handleIncrement}>+</button>
            </div>
        )
    }
}

export default CounterClass
