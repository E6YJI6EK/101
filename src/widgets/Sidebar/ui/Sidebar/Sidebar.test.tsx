import { fireEvent, render, screen } from '@testing-library/react';
import { renderWithTranslation } from 'shared/lib/tests/renderWithTranslations/renderWithTranslation';
import { Sidebar } from "./Sidebar";

describe('Sidebar', () => {
    test("test sidebar", () => {
        renderWithTranslation(<Sidebar/>);
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        screen.debug();
    })

    test("test toggle button", () => {
        renderWithTranslation(<Sidebar/>);
        const toggleButton = screen.getByTestId('sidebar-toggle');
        expect(screen.getByTestId('sidebar')).toBeInTheDocument();
        fireEvent.click(toggleButton);
        expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
        screen.debug();
    })
})