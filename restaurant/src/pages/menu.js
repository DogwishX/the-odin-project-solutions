import Element from '../component/element';
import MenuItem from '../component/menuItemCard';

function menu() {
	const pizzas = [
		{
			img: 'https://michalosman.github.io/restaurant-page/images/pizzas/salsiccia.png',
			name: 'Salsiccia',
			ingredients:
				'Tomato sauce, Mozarella, Tomato, Homemade sausage, Garlic, Basil',
		},
		{
			img: 'https://michalosman.github.io/restaurant-page/images/pizzas/salsiccia.png',
			name: 'Gamberi',
			ingredients:
				'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil',
		},
		{
			img: 'https://michalosman.github.io/restaurant-page/images/pizzas/salsiccia.png',
			name: 'Creme',
			ingredients:
				'Tomato sauce, Mozarella, Shrimps, Feta cheese, Olives, Basil',
		},
	];

	let mainDiv = new Element('div', 'menu', '#content');

	pizzas.forEach(
		({ img, name, ingredients }) => new MenuItem(img, name, ingredients)
	);
}

export default menu;
