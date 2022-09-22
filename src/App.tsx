import { FC, Suspense } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Counter from './components/Counter';
import './index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';

const App: FC = () => {
    return (
        <div className='App'>
            <h1>Aboba</h1>
            <Counter></Counter>
            <Link to={"/"}>Main</Link>
            <Link to={"/about"}>About</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>

                    <Route path="/about" element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    )
}

export default App;