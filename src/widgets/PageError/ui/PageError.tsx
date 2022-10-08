import { ThemeProvider, useTheme } from 'app/providers/ThemeProvider';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { LanguageSwitcher } from 'widgets/LanguageSwitcher';
import { ThemeSwitcher } from 'widgets/ThemeSwitcher';
import cls from './PageError.module.scss';

interface PageErrorProps {
    className?: string;
}

export const PageError: FC<PageErrorProps> = ({ className }) => {
    const { t } = useTranslation('error');
    const { theme } = useTheme();

    const reloadPage = () => {
        location.reload();
    }

    return (
        <ThemeProvider>
            <div className={classNames(cls.PageError, {}, [className, theme])}>
                <h2 className={cls.text}>{t('Произошла непредвиденная ошибка')}</h2>
                <Button theme={ThemeButton.OUTLINED} onClick={reloadPage}>
                    {t('Обновить страницу')}
                </Button>
                <LanguageSwitcher theme={ThemeButton.OUTLINED} />
                <ThemeSwitcher />
            </div>
        </ThemeProvider>

    );
}