import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import cls from './LanguageSwitcher.module.scss';

interface LanguageSwitcherProps {
    className?: string;
    theme?: ThemeButton
}

export const LanguageSwitcher: FC<LanguageSwitcherProps> = ({ className, theme }) => {
    const { t, i18n } = useTranslation();

    const toggle = async () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
    }

    return (
            <Button 
                className={classNames(cls.LanguageSwitcher, {}, [className])}
                theme={theme} 
                onClick={toggle}
            >
                {t('Язык')}
            </Button>
    )
}