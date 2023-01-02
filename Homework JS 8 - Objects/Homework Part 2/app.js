const bookTitle = document.querySelector(".title");
const bookAuthor = document.querySelector(".author");
const bookStatus = document.querySelector(".readStatus");
const button = document.querySelector(".button");

function exampleOne(title, author, read) {
  this.title = title;
  this.author = author;
  this.read = read;
  this.readBook = function () {
    if (this.read.checked) {
      return console.log(`Already read ${this.title} by ${this.author}`);
    } else {
      return console.log(
        `You still need to read ${this.title} by ${this.author}`
      );
    }
  };
}

button.addEventListener("click", function () {
  let book = new exampleOne(bookTitle.value, bookAuthor.value, bookStatus);
  book.readBook();
});
