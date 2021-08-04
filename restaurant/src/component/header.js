import Element from './element';

class Header {
	constructor() {
		this.header = new Element('div', 'header', '#content');
		this.mozzafiato = new Element('h1', 'mozzafiato', '.header', 'Mozzafiato');
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

export default Header;
