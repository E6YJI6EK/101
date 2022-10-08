import { BugButton } from 'app/providers/ErrorBoundary';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './MainPage.module.scss';

interface MainPageProps {
    className?: string;
}

const MainPage:FC<MainPageProps> = ({className}) => {
    const {t} = useTranslation('main');
    return (
        <div className={classNames(cls.MainPage, {}, [className])}>
            {t("Главная")}
            <BugButton />
        </div>
    );
}

export default MainPage;