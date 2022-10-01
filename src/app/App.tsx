import { FC } from 'react';
import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';




const App: FC = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('App', { hovered: true, selected: false }, [theme])}>
            <Navbar/>
            <button onClick={toggleTheme}>Change theme</button>
            
            <AppRouter/>
        </div>

    )
}

export default App;