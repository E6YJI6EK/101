import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LanguageSwitcher }  from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './Sidebar.module.scss';

interface SidebarProps {
    className?: string;
}

export const Sidebar:FC<SidebarProps> = ({className}) => {

    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => {
        setCollapsed(prev => !prev);
    }

    return(
        <div className={classNames(cls.Sidebar, {[cls.collapsed]: collapsed }, [className])}>
            <Button theme={ThemeButton.OUTLINED_INVERTED} onClick={onToggle}>Toggle</Button>
            <div className={cls.switchers}>
                <ThemeSwitcher />
                <LanguageSwitcher theme={ThemeButton.OUTLINED_INVERTED} className={cls.lang}/>
            </div>
            
        </div>
    );
}