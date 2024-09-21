// Greeting.tsx
import React from 'react';

// Step 1: Define an interface for the props
interface GreetingProps {
    name: string; // 'name' should be a string
}

// Step 2: Use the props in the functional component
const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <div>Hello, {name}!</div>;
};

// Step 3: Export the component
export default Greeting;
