import Element from './element';
import MenuItem from './menuItemCard';
import home from '../pages/home';
import menu from '../pages/menu';
import contact from '../pages/contact';

class Main {
	constructor(pageName) {
		home();
		menu();
		contact();
	}
}

export default Main;
