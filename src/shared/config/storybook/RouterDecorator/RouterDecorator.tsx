import { Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

const RouterDecorator = (story: () => Story) => {
    return (
        <BrowserRouter>
        {story()}
        </BrowserRouter>
    );
};

export default RouterDecorator;
