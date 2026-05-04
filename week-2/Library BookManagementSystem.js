/*Problem Statement: Library Book Management System
-------------------------------------------------
Objective : Create a Book class and use it to manage a collection of books in a library.

Requirements:
  Create a Book class with the following:

  Properties:
      title (string)
      author (string)
      pages (number)
      isAvailable (boolean, default: true)


  Methods:
      borrow() - Marks the book as not available
      returnBook() - Marks the book as available
      getInfo() - Returns a string with book details (e.g., "The Hobbit by J.R.R. Tolkien (310 pages)")
      isLongBook() - Returns true if pages > 300, false otherwise




  1. Create at least 5 book objects using the class:
      Example: "Harry Potter", "1984", "The Hobbit", etc.


  2. Perform the following operations:

      i. Display info of all books
      ii. Borrow 2 books and show their availability status
      iii. Return 1 book and show updated status
      iv. Count how many books are "long books" (more than 300 pages)
      v. List all available books*/
class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isAvailable = true; // default value
  }
    borrow() {
    if (this.isAvailable) {
        this.isAvailable = false;
        return `You have borrowed "${this.title}".`;
    } else {
        return `"${this.title}" is currently not available.`;
    }
    }
    returnBook() {
    if (!this.isAvailable) {
        this.isAvailable = true;
        return `You have returned "${this.title}".`;
    }
    return `"${this.title}" was not borrowed.`;
    }
    getInfo() {
    return `${this.title} by ${this.author} (${this.pages} pages)`;
    }
    isLongBook() {
    return this.pages > 300;
    }
}
// Create book objects
const book1 = new Book("Harry Potter", "J.K. Rowling", 500);
const book2 = new Book("1984", "George Orwell", 328);
const book3 = new Book("The Hobbit", "J.R.R. Tolkien", 310);
const book4 = new Book("To Kill a Mockingbird", "Harper Lee", 281);
const book5 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 180);
// 1. Display info of all books
const books = [book1, book2, book3, book4, book5];
console.log("Book Information:");
books.forEach(book => console.log(book.getInfo()));
// 2. Borrow 2 books and show their availability status
console.log("\nBorrowing Books:");

console.log(book1.borrow());
console.log(book2.borrow());
console.log(`Is "${book1.title}" available? ${book1.isAvailable}`);
console.log(`Is "${book2.title}" available? ${book2.isAvailable}`);
// 3. Return 1 book and show updated status
console.log("\nReturning a Book:");
console.log(book1.returnBook());
console.log(`Is "${book1.title}" available? ${book1.isAvailable}`);
// 4. Count how many books are "long books" (more than 300 pages)
const longBooksCount = books.filter(book => book.isLongBook()).length;
console.log(`\nNumber of long books (more than 300 pages): ${longBooksCount}`);
// 5. List all available books
const availableBooks = books.filter(book => book.isAvailable);
console.log("\nAvailable Books:");
availableBooks.forEach(book => console.log(book.getInfo()));
