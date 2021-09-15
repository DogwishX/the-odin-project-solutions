import React from 'react';
import {
	render,
} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Grid from '../Grid';

let component;
let getByTestId;

beforeEach(() => {
	component = render(<Grid>0</Grid>);
	getByTestId = component.getByTestId;
});

test('Render grid', () => {
	const grid = getByTestId('grid');
  expect(grid.className).toBe('grid-container');
});

test('Render grid items', () => {})