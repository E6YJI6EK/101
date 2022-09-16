import { useState, FC } from 'react';
import classes from '../styles/Counter.module.scss';


const Counter:FC = () => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => setCount(count + 1)} className={classes.btn}>Inc</button>
            <button onClick={() => setCount(count - 1)} className={classes.btn}>Dec</button>
        </div>
    );
}

export default Counter;