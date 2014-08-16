//Use object-oriented JavaScript to model a public library (w/ three classes: Library, Shelf, & Book). *
//The library should be aware of a number of shelves.
//Each shelf should know what books it contains.
//Make the book object have "enshelf" and "unshelf" methods that control what shelf the book is sitting on.
//The library should have a method to report all books it contains.
//In addition to pushing this .js file to your Github account,
//please also setup a http://jsfiddle.net/ with the solution
//and enter the saved URL here so we can take a look.

//library constructor
var Library = function(name){
	this.name = name;
	this.numShelfs = 0;
	this.shelves = [];
	this.reportAllBooks = function(){
		console.log(this.name+" contains:");
		for (var i = 0; i < this.shelves.length; i++) {
			this.shelves[i].reportAllBooks();
		}
		console.log("\n");
	};
	// this.findShelf = function(name){
	// 	var firstLetter = name.substring(0,1).toLowerCase();
	// 	for (var i = 0; i < this.shelf.length; i++) {
	// 		if(this.shelf[i].name === firstLetter){
	// 			return shelf[i];
	// 		} else {
	// 			return new Shelf(firstLetter,this);
	// 		}
	// 	}
	// };
	this.addBook = function(book) {
		var firstLetter = book.name.substring(0,1).toLowerCase();
		for (var i = 0; i < this.shelves.length; i++) {
			if(this.shelves[i].name == firstLetter){
				this.shelves[i].addBook(book);
				return;
			}
		}
		new Shelf(firstLetter,this).addBook(book);

	};

	this.removeBook = function(book) {
		var firstLetter = book.name.substring(0,1).toLowerCase();
		for (var i = 0; i < this.shelves.length; i++) {
			if(this.shelves[i].name == firstLetter){
				this.shelves[i].removeBook(book);
				return;
			}
		}

		new Shelf(firstLetter,this).removeBook(book);
		
	};
};

//Shelf constructor
var Shelf = function(name,library){
	this.name = name;
	this.books = [];
	library.numShelfs++;
	library.shelves.push(this);
	this.reportAllBooks = function(){
		console.log(this.name+" contains:");
		for (var i = 0; i < this.books.length; i++) {
			console.log(this.books[i].getBookName());
		}
		console.log("\n");
	};

	this.addBook = function(book){
		this.books.push(book);
	};
	this.removeBook = function(book){
		var locationOnShelf = this.books.indexOf(book);
		console.log(locationOnShelf);
		this.books.splice(locationOnShelf,1);
	};
};


//book constructor
var Book = function(name,library){
	this.name = name;
	this.library = library;
	//enshelf method
	this.enShelf = function() {
		this.library.addBook(this);
		// var shelf = this.library.findShelf(this.name);
		// for (var i in shelf) {

		// }
		// shelf.books.push(this);
	};

	//unshelf method
	this.unShelf = function(){
		this.library.removeBook(this);
		// var shelf = this.library.findShelf(this.name);
		// var locationOnShelf = shelf.books.indexOf(this);
		// console.log(locationOnShelf);
		// shelf.books.splice(locationOnShelf,1);
	};
	this.getBookName = function() {
		return this.name;
	}
};

//make a library with the library constructor called Seattlelibrary
var Seattlelibrary = new Library("Seattlelibrary");
//make some shelfs with the Shelf constructor

//use the book constructor to place a book in the library

var harryPotter = new Book("Sorcerer's Stone",Seattlelibrary);
var theAvatar = new Book("Avatar",Seattlelibrary);
var ants = new Book("The Secret World of Ants",Seattlelibrary);
var harryPotter2 = new Book("Sorcerer's Stone2",Seattlelibrary);
var avatar2 = new Book("Avatar 2",Seattlelibrary);


//put harry potter and avatar on shelf 1



harryPotter.enShelf(); //index 0
theAvatar.enShelf(); //index 1
harryPotter2.enShelf(); //index 2
avatar2.enShelf() // index 3

//put ants on shelf 2

ants.enShelf();

//report all books on shelf
Seattlelibrary.reportAllBooks();

//unshelf harry potter off shelf1
harryPotter.unShelf(); //first occurance, index 0

//report all books in the library;
Seattlelibrary.reportAllBooks();

