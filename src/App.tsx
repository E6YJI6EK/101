import { FC, Suspense, useContext } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import './styles/index.scss';
import { useTheme } from './theme/useTheme';




const App: FC = () => {
    const {theme, toggleTheme} = useTheme();

    return (
            <div className={`App ${theme}`}>
                <button onClick={toggleTheme}>Change theme</button>
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