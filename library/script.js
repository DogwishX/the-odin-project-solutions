// Form
const book = document.querySelector('#book-input');
const author = document.querySelector('#author-input');
const statusList = document.querySelector('#selected-item');
const statusListOptions = document.querySelector('.options');
const statusListLabels = document.querySelectorAll('.options label');
const statusSelectedItem = document.querySelector('#selected-item');
const submitBtn = document.querySelector('#submit-btn');
let bookStatus = 'Read';

submitBtn.addEventListener('click', handleSubmit);
statusList.addEventListener('click', toggleStatusList);

statusListLabels.forEach((child) =>
	child.addEventListener('click', handleOptionSelect)
);

function handleSubmit() {
	if (book.value.length > 0 && author.value.length > 0) {
		addBookToLibrary(book.value, author.value, bookStatus);
		displayLibrary();
		book.value = '';
		author.value = '';
	}
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
	// { author: 'scott', book: 'EndersGame2', isRead: 'Read', nPages: '365' },
	// { author: 'scott', book: 'EndersGame3', isRead: 'Read', nPages: '365' },
	// { author: 'scott', book: 'EndersGame4', isRead: 'Read', nPages: '365' },
];

class Book {
	constructor(book, author, isRead) {
		this.book = book;
		this.author = author;
		this.isRead = isRead;
	}
	toggle() {
		this.textContent == 'Read'
			? (this.textContent = 'Not Read')
			: (this.textContent = 'Read');
		console.log(this.isRead);
	}
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
		const deleteBtn = document.createElement('td');

		name.textContent = `${book.book}`;
		author.textContent = `${book.author}`;
		status.textContent = `${book.isRead}`;
		tableRow.append(name, author, status, deleteBtn);
		tableRow.classList.add('table-data');
		libraryTable.append(tableRow);

		status.addEventListener('click', book.toggle);

		deleteBtn.textContent = `Delete`;
		deleteBtn.id = book.book;
		deleteBtn.classList.add('delete-btn');
		deleteBtn.addEventListener('click', removeRow);
	}
}

function resetDisplay() {
	const libraryDataItems = document.querySelectorAll('.table-data');
	libraryDataItems.forEach((item) => item.remove());
}

function removeRow({ target }) {
	myLibrary = myLibrary.filter((item) => item.book != target.id);
	target.parentNode.remove();
}
