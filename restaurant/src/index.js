import './style.css';
import Header from './component/header';
import Main from './component/main';

const WEBPAGE = (() => {
	const header = new Header();
	const main = new Main();

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
})();
