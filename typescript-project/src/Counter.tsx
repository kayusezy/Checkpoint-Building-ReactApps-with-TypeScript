// Counter.tsx
import  { Component } from 'react';

// Step 1: Define an interface for the component's state
interface CounterState {
    count: number; // 'count' should be a number
}

// Step 2: Create the Counter class component
class Counter extends Component<{}, CounterState> {
    // Step 3: Initialize the state
    state: CounterState = {
        count: 0,
    };

    // Step 4: Define the increment method
    increment = () => {
        this.setState((prevState) => ({
            count: prevState.count + 1,
        }));
    };

    // Step 5: Render the component
    render() {
        return (
            <div>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>Increment</button>
            </div>
        );
    }
}

// Step 6: Export the component
export default Counter;
