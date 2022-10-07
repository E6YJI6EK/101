import { classNames } from "./classNames";

describe('classNames', () => {
    test('with only first param', () => {
        const expected = 'someClass';
        expect(classNames('someClass')).toBe(expected); // ожидаем, что вызов функции classNames('someClass') вернет "someClass"
    })

    test('with additional class param', () => {
        const expected = 'someClass class1 class2';
        expect(classNames(
            'someClass', 
            {}, 
            ['class1', 'class2']))
        .toBe(expected); 
    })

    test('with mods param', () => {
        const expected = 'someClass class1 class2 hovered scrollable';
        expect(classNames(
            'someClass', 
            {hovered: true, scrollable: true}, 
            ['class1', 'class2']))
        .toBe(expected); 
    })

    test('with false mods param', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass', 
            {hovered: true, scrollable: false}, 
            ['class1', 'class2']))
        .toBe(expected); 
    })

    test('with undefined mods param', () => {
        const expected = 'someClass class1 class2 hovered';
        expect(classNames(
            'someClass', 
            {hovered: true, scrollable: undefined}, 
            ['class1', 'class2']))
        .toBe(expected); 
    })
});