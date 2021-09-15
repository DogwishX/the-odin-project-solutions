import React from 'react';
import {
	render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Header from '../Header';

let component;
let getByTestId;

beforeEach(() => {
	component = render(<Header>Header</Header>);
	getByTestId = component.getByTestId;
});

test('Render h1', () => {
	const header = getByTestId('header');
  expect(header.textContent).toBe('Header');
});


