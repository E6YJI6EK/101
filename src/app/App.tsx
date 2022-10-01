import { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';




const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('App', { hovered: true, selected: false }, [theme])}>
            <Navbar/>
            <AppRouter/>
        </div>

    )
}

export default App;