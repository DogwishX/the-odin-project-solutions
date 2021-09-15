import React, { useState } from 'react';
import Header from './components/Header/Header';
import Score from './components/Score/Score';
import Grid from './components/Grid/Grid';


function App() {
	const [score, setScore] = useState(0);

	return (
		<div className="App">
			WORKED
			{/* Components */}
			{/* Header */}
			<Header>PokeMemory</Header>
			{/* Score */}
			<Score>{score}</Score>
			{/* Grid */}
      <Grid gridSize='3'></Grid>
			{/* Card */}
			{/* Footer */}
		</div>
	);
}

export default App;
