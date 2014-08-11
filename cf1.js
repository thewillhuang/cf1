//Use object-oriented JavaScript to model a public library (w/ three classes: Library, Shelf, & Book). *
//The library should be aware of a number of shelves.
//Each shelf should know what books it contains.
//Make the book object have "enshelf" and "unshelf" methods that control what shelf the book is sitting on.
//The library should have a method to report all books it contains.
//
//In addition to pushing this .js file to your Github account,
//please also setup a http://jsfiddle.net/ with the solution
//and enter the saved URL here so we can take a look.

//library constructor
var Library = function(name){
    this.name = name;
    this.numShelfs = 0;
    this.books = [];
    this.Shelfs = [];
    this.reportAllBooks = function(){
        console.log(this.name+" contains:");
		for (var i = 0; i < this.books.length; i++) {
			console.log(this.books[i]);
		}
        console.log("\n");
	};
};

//Shelf constructor
var Shelf = function(name,libarary){
	this.name = name;
	this.books = [];
	libarary.numShelfs++;
    this.reportAllBooks = function(){
        console.log(this.name+" contains:");
        for (var i = 0; i < this.books.length; i++) {
            console.log(this.books[i]);
	    }
        console.log("\n");
    };
};


//book constructor
var Book = function(name,libarary){
	this.name = name;
	//enshelf method
	this.enShelf = function(shelf){
		shelf.books.push(this.name);
		libarary.books.push(this.name);
	};
	//unshelf method
	this.unShelf = function(shelf){
		var locationOnShelf = shelf.books.indexOf(this.name);
		shelf.books.splice(locationOnShelf,1);
	};
};

//make a libarary with the Libarary constructor called SeattleLIbarary
var SeattleLibarary = new Library("SeattleLibarary");
//make some shelfs with the Shelf constructor

var shelf1 = new Shelf("shelf1",SeattleLibarary);
var shelf2 = new Shelf("shelf2",SeattleLibarary);

//use the book constructor to place a book in the libarary

var harryPotter = new Book("Sorcerer's Stone",SeattleLibarary);
var theAvatar = new Book("Avatar",SeattleLibarary);
var ants = new Book("The Secret World of Ants",SeattleLibarary);

//put harry potter and avatar on shelf 1

harryPotter.enShelf(shelf1);
theAvatar.enShelf(shelf1);

//put ants on shelf 2

ants.enShelf(shelf2);

//report all books on shelf
shelf1.reportAllBooks();
shelf2.reportAllBooks();

//unshelf harry potter off shelf1
harryPotter.unShelf(shelf1);

//report all books in the libarary;
SeattleLibarary.reportAllBooks();

//report all books on shelf
shelf1.reportAllBooks();
shelf2.reportAllBooks();


