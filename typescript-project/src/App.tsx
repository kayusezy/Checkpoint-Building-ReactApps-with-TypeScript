// App.tsx
import React from 'react';
import Greeting from './Greeting';
import Counter from './Counter';
import './App.css'; // Make sure to import your CSS

const App: React.FC = () => {
    return (
        <div className="App">
            <Greeting name="John" /> {/* Pass a name prop */}
            <Counter />
        </div>
    );
};

export default App;
