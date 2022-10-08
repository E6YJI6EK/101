import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface BugButtonProps {
    className?: string;
}
// чисто для теста
export const BugButton:FC<BugButtonProps> = ({className}) => {
    const {t} = useTranslation('error');
    const [error, setError] = useState(false);

    const onThrow = () => {
        setError(true);
    }

    useEffect(() => {
        if (error){
            throw new Error();
        }
        
    }, [error])

    return(
        <Button 
            onClick={onThrow}
            theme={ThemeButton.OUTLINED} 
            className={classNames('', {}, [className])}
        >
            {t('Throw Error')}
        </Button>
    );
}