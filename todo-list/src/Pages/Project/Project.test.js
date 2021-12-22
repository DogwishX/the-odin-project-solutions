import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import Project from './Project';

const project = {
    name: 'project01', todos: [{ todoName: 'wash dishes', due: '01/01/2022' }]
}
describe('Render', () => {
    beforeEach(() => {
        render(<Project {...project} />)
    })

    afterEach(() => cleanup())

    test('title', () => {
        const title = screen.getByTestId('project__title');
        expect(title).toBeTruthy();
    })

    test('display todos', () => {
        const todo = screen.getByText('wash dishes');
        expect(todo).toBeTruthy();
    })
})

describe('Interactions', () => {
    beforeEach(() => {
        render(<Project {...project} />)
    })

    afterEach(() => cleanup());

    test('change todo name', () => {
        const todoName = () => screen.getByTestId('todo__name');
        fireEvent.click(todoName());

        const todoNameInput = screen.getByTestId('todo__input');
        fireEvent.change(todoNameInput, { target: { value: 'changed todo' } });

        const saveBtn = screen.getByTestId('todo__save');
        fireEvent.click(saveBtn);

        expect(todoName().innerText).toBe('changed todo');
    }
    )
})