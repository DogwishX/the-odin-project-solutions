import './style.css';

const WEBPAGE = (() => {
	class Element {
		constructor(tag, cssSelector, parentNode, text = '') {
			this.element = document.createElement(tag);
			this.element.classList.add(cssSelector);
			this.element.textContent = text;
			this._appendTo(parentNode);
		}

		_appendTo(parentNode) {
			this.parentNode = document.querySelector(parentNode);
			this.parentNode.appendChild(this.element);
		}
	}

	class MenuItem {
		constructor(img, name, ingredients) {
			this.itemDiv = new Element('div', `${name}-div`, '.menu');

			this.img = new Element('img', 'item-img', `.${name}-div`);
			this.img.element.src = img;

			this.name = new Element('h4', 'item-name', `.${name}-div`);
			this.name.element.textContent = name;

			this.ingredients = new Element('p', 'item-ingredients', `.${name}-div`);
			this.ingredients.element.textContent = ingredients;
		}
	}

	class Header {
		constructor() {
			this.header = new Element('div', 'header', '#content');
			this.mozzafiato = new Element(
				'h1',
				'mozzafiato',
				'.header',
				'Mozzafiato'
			);
			this.tabsContainer = new Element('ul', 'tabs__container', '.header');
			this._createTabs();
		}

		_createTabs() {
			const tabs = ['Home', 'Menu', 'Contact'];
			tabs.forEach((tab) => {
				this[tab] = new Element('li', 'tab', '.tabs__container', tab);
			});
		}
	}

	class Main {
		constructor(pageName) {
			this[pageName]();
		}
		home() {
			this.homeDiv = new Element('div', 'home', '#content');
			this.homeDiv.element.classList.add('active');
			this.firstLine = new Element(
				'p',
				'home-text',
				'.home',
				'Best pizza in your country'
			);

			this.secondLine = new Element(
				'p',
				'home-text',
				'.home',
				'Made with passion since 1908'
			);

			this.image = new Element('img', 'home-img', '.home');
			// console.log(chefImg);
			this.image.element.src =
				'https://michalosman.github.io/restaurant-page/images/chef.png';

			this.thirdLine = new Element(
				'p',
				'home-text',
				'.home',
				'Order online or visit us!'
			);
		}

		menu() {
			const options = [
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

			this.menuDiv = new Element('div', 'menu', '#content');
			options.forEach(
				({ img, name, ingredients }) =>
					(this[name] = new MenuItem(img, name, ingredients))
			);
		}
		contact() {
			this.contactDiv = new Element('div', 'contact', '#content');
		}
	}

	// class Footer {
	// 	constructor() {
	// 		this.footer = new Element('div', 'footer', '#content');
	// 	}
	// }
	const header = new Header();
	const home = new Main('home');
	const menu = new Main('menu');
	const contact = new Main('contact');

	const tabs = document.querySelectorAll('.tab');
	tabs.forEach((tab) => tab.addEventListener('click', displayMain));

	function displayMain({ target }) {
		resetDisplay();
		const id = target.textContent.toLowerCase();
		const affectedMain = document.querySelector(`.${id}`);
		affectedMain.classList.add('active');
	}

	function resetDisplay() {
		tabs.forEach((tab) => {
			const id = tab.textContent.toLowerCase();
			const currentMain = document.querySelector(`.${id}`);
			currentMain.classList.remove('active');
		});
	}
	// const footer = new Footer();
})();
