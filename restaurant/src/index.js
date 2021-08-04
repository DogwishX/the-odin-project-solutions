import './style.css';

const WEBPAGE = (() => {
	class Element {
		constructor(tag, cssSelector, parentNode) {
			this.element = document.createElement(tag);
			this.element.classList.add(cssSelector);
			this.appendTo(parentNode);
		}

		appendTo(parentNode) {
			this.parentNode = document.querySelector(parentNode);
			this.parentNode.appendChild(this.element);
		}

		assignText(text) {
			this.element.textContent = text;
		}
	}

	class Header {
		constructor() {
			this.header = new Element('div', 'header', '#content');
			this.mozzafiato = new Element('h1', 'mozzafiato', '.header').assignText(
				'Mozzafiato'
			);
			this.tabsContainer = new Element('ul', 'tabs__container', '.header');
			this.createTabs();
		}

		createTabs() {
			const tabs = ['Home', 'Menu', 'Contact'];
			tabs.forEach((tab) => {
				this[tab] = new Element('li', 'tabs__tab', '.tabs__container');
				this[tab].element.textContent = tab;
			});
		}
	}

	const header = new Header();
})();
