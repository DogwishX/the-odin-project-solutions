import React, { useState, useEffect } from 'react';
import Header from './components/Header/Header';
import Score from './components/Score/Score';
import Grid from './components/Grid/Grid';
import Card from './components/Card/Card';
import data from './pokeData';

let dataCopy = data;

function App() {
	const [score, setScore] = useState(0);
	const [loading, setLoading] = useState(true);
	const [
		previouslySelectedPokemon,
		setPreviouslySelectedPokemon,
	] = useState([]);

	function selectPokemon(event) {
		event.stopPropagation();
		const clickedPokemon = event.currentTarget.id;
		if (
			!previouslySelectedPokemon.includes(
				clickedPokemon
			)
		) {
			setPreviouslySelectedPokemon([
				...previouslySelectedPokemon,
				clickedPokemon,
			]);
			setScore(score + 1);
			shuffleArray(dataCopy);
		} else {
			setScore(0);
			setPreviouslySelectedPokemon([]);
			shuffleArray(dataCopy);
		}
	}

	function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
	return (
		<div className="App">
			<Header>PokeMemory</Header>
			<Score>{score}</Score>
			<Grid gridSize="3"></Grid>
			{dataCopy.map((pokemonData) => (
				<Card
					selectPokemon={selectPokemon}
					key={pokemonData.id}
					{...pokemonData}
				/>
			))}
		</div>
	);
}

export default App;
