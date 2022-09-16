import { FC } from 'react';
import Counter from './components/Counter';
import './index.scss';

const App:FC = () => {
    return (
        <div className='App'>
            <h1>Aboba</h1>
            <Counter></Counter>
        </div>
    )
}

export default App;