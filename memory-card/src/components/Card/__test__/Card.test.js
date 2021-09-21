import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import data from '../../../pokeData';
import Card from '../Card';

let component;
let getByTestId;

beforeEach(() => {
	component = render(<Card {...data}></Card>);
	getByTestId = component.getByTestId;
});

test('Render Card', () => {
	const card = getByTestId('card');
	expect(card.textContent).toBeTruthy();
});

test('Display Image', () => {
	const image = getByTestId('image');
	expect(image.src).toBe(
		'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png'
	);
});

test('Display Name', () => {
	const name = getByTestId('name');
	expect(name.textContent).toBe('ditto')
})

