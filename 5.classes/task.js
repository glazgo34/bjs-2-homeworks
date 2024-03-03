class PrintEditionItem {
	constructor (name, releaseDate, pagesCount) {
		this.name = name;
		this.releaseDate = releaseDate;
		this.pagesCount = pagesCount;
		this.state = 100;
		this.type = null;
	}
	
	fix() {
		this.state = this.state * 1.5;
	}
	
	set state(newState) {
		if (newState < 0) {
			this._state = 0;
		} else if (newState > 100) {
			this._state = 100;
		} else {
			this._state = newState;
		}
	}

	get state() {
		return this._state;
	}
}

class Magazine extends PrintEditionItem {
	constructor(name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.type = "magazine";
	}
}

class Book extends PrintEditionItem {
	constructor(author, name, releaseDate, pagesCount) {
		super(name, releaseDate, pagesCount);
		this.author = author;
		this.type = "book";
	}
}

class NovelBook extends Book {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "novel";
	}
}

class FantasticBook extends Book  {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "fantastic";
	}
}

class DetectiveBook extends Book  {
	constructor(name, releaseDate, pagesCount, author) {
		super(name, releaseDate, pagesCount, author);
		this.type = "detective";
	}
}

class Library {
	constructor(name) {
		this.name = name;
		this.books = [];
	}

	addBook(book) {
		if(book.state > 30) {
			this.books.push(book);
		}
	}

	findBookBy(type, value) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i][type] === value) {
				return this.books[i];
			}
		}
		return null;
	}

	giveBookByName(bookName) {
		for (let i = 0; i < this.books.length; i++) {
			if (this.books[i].name === bookName) {
				return this.books.splice(i, 1)[0];
			}
		}
		return null;
	}
}

class Student {
	constructor (name) {
			this.name = name;
			this.marks = {};   
	}
	addMark(mark, subject){
			if(mark >= 2 && mark <= 5) {
				 if(!this.marks[subject]){
					this.marks[subject] = [];
				 }
				 this.marks[subject].push(mark);
			}       
	}

	getAverageBySubject(subject){
			if(!this.marks[subject]){
					return 0;
				 }
		 let average = this.marks[subject].reduce((acc, el) => acc + el, 0);
		 return average / this.marks[subject].length;
	}

	getAverage() {
			const subjects = Object.keys(this.marks);
			if (subjects.length === 0) {
				return 0; 
			}
			const totalSum = subjects.reduce((acc, el) => {
				return acc + this.getAverageBySubject(el);
			}, 0);
			return totalSum / subjects.length;
		}
}
