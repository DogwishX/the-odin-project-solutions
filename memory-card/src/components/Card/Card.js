import './Card.css'

function Card({imgSrc, pokeName, selectPokemon}) {
	return (
		<div data-testid="card" onClick={selectPokemon} id={pokeName} className='card-container'>
			<img data-testid='image' alt={pokeName} src={imgSrc}/>
      <h4 data-testid='name'>{pokeName}</h4>
		</div>
	);
}

export default Card;
