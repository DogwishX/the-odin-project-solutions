import React from 'react';
import {
	render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Score from '../Score';

let component;
let getByTestId;

beforeEach(() => {
	component = render(<Score>0</Score>);
	getByTestId = component.getByTestId;
});

test('Render score', () => {
	const score = getByTestId('score');
  expect(score.textContent).toBe('0');
});

test('Display score on change', () => {
	const score = getByTestId('score');
  score.textContent = 5
  expect(score.textContent).toBe('5');
});