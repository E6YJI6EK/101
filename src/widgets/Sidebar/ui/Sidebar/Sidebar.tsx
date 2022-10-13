import { FC, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LanguageSwitcher }  from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar:FC<SidebarProps> = ({className}) => {
    const {t} = useTranslation('sidebar');

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return(
        <div 
            data-testid="sidebar"
            className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed }, [className])}
        >
            <Button 
                data-testid='sidebar-toggle'
                theme={ThemeButton.OUTLINED_INVERTED} 
                onClick={onToggle}
            >
                {t('Toggle')}
            </Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher theme={ThemeButton.OUTLINED_INVERTED} className={cls.lang}/>
            </div>
            
        </div>
    );
}