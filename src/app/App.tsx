import { FC, Suspense, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Loader } from 'shared/ui/Loader/Loader';

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <div className={classNames('App', { hovered: true, selected: false }, [theme])}>
            <Suspense fallback={<div className='loader-wrapper'><Loader/></div>}>
                <Navbar />
                
                <div className='content-page'>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>

        </div>

    )
}

export default App;