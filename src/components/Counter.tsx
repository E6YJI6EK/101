import { useState } from 'react';
import React, { FC } from 'react';
import '../styles/Counter.scss';


const Counter:FC = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)}>Inc</button>
            <button onClick={() => setCount(count - 1)}>Dec</button>
        </div>
    );
}

export default Counter;