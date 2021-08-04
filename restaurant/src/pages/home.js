import Element from '../component/element';

function home() {
	let homeDiv = new Element('div', 'home', '#content');
	homeDiv.element.classList.add('active');
	let firstLine = new Element(
		'p',
		'home-text',
		'.home',
		'Best pizza in your country'
	);

	let secondLine = new Element(
		'p',
		'home-text',
		'.home',
		'Made with passion since 1908'
	);

	let image = new Element('img', 'home-img', '.home');
	// console.log(chefImg);
	image.element.src =
		'https://michalosman.github.io/restaurant-page/images/chef.png';

	let thirdLine = new Element(
		'p',
		'home-text',
		'.home',
		'Order online or visit us!'
	);
}

export default home;
