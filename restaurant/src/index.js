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

		assignText(text) {}
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
			this.mainDiv = new Element('div', 'main', '#content');
			this[pageName]();
		}
		home() {
			this.homeDiv = new Element('div', 'home', '.main');

			this.firstLine = new Element(
				'p',
				'home-text',
				'home',
				'Best pizza in your country'
			);

			this.secondLine = new Element(
				'p',
				'home-text',
				'home',
				'Made with passion since 1908'
			);

			this.image = new Image();
			this.image.src = '';

			this.thirdLine = new Element(
				'p',
				'home-text',
				'home',
				'Order online or visit us!'
			);
		}
		menu() {
			console.log('menu');
		}
		contact() {
			console.log('contact');
		}
	}

	class Footer {
		constructor() {
			this.footer = new Element('div', 'footer', '#content');
		}
	}

	const header = new Header();
	const home = new Main('home');
	// const menu = new Main('menu');
	// const contact = new Main('contact');
	const footer = new Footer();
})();
