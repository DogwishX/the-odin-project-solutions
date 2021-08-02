// Form
const book = document.querySelector('#book-input');
const author = document.querySelector('#author-input');
let bookStatus = 'Read';
const statusList = document.querySelector('#selected-item');
const statusListOptions = document.querySelector('.options');
const statusListLabels = document.querySelectorAll('.options label');
const statusSelectedItem = document.querySelector('#selected-item');
const submitBtn = document.querySelector('#submit-btn');

submitBtn.addEventListener('click', handleSubmit);
statusList.addEventListener('click', toggleStatusList);

statusListLabels.forEach((child) =>
	child.addEventListener('click', handleOptionSelect)
);

function handleSubmit() {
	addBookToLibrary(book.value, author.value, bookStatus);
	book.value = '';
	author.value = '';
	displayLibrary();
}

function toggleStatusList() {
	statusListOptions.classList.toggle('options--hide');
}

function handleOptionSelect({ target }) {
	bookStatus = target.textContent;
	statusSelectedItem.textContent = target.textContent;
	toggleStatusList();
}

// Library

let myLibrary = [
	{ author: 'scott', book: 'EndersGame2', isRead: true, nPages: '365' },
	{ author: 'scott', book: 'EndersGame3', isRead: true, nPages: '365' },
	{ author: 'scott', book: 'EndersGame4', isRead: true, nPages: '365' },
];

function Book(book, author, isRead) {
	this.book = book;
	this.author = author;
	this.isRead = isRead;
}

function addBookToLibrary(book, author, isRead) {
	let newBook = new Book(book, author, isRead);
	myLibrary.push(newBook);
}

// Library Table/Display
const libraryTable = document.querySelector('.library');
displayLibrary();

function displayLibrary() {
	resetDisplay();
	for (let book of myLibrary) {
		const tableRow = document.createElement('tr');
		const name = document.createElement('td');
		const author = document.createElement('td');
		const status = document.createElement('td');

		name.textContent = `${book.book}`;
		author.textContent = `${book.author}`;
		status.textContent = `${book.isRead}`;
		tableRow.append(name, author, status);
		tableRow.classList.add('table-data');
		libraryTable.append(tableRow);
	}
}

function resetDisplay() {
	const libraryDataItems = document.querySelectorAll('.table-data');
	libraryDataItems.forEach((item) => item.remove());
}
