class Booklist {
  constructor(bookList = [], index = 0) {
    this.bookList = bookList;
    this.bookIndex = index;
  }

  add(bookList) {
    this.bookList.push(...bookList);
  }

  getCurrentBook() {
    return this.bookList[this.bookIndex];
  }

  getNextBook() {
    return this.bookList[this.bookIndex + 1];
  }

  getPrevBook() {
    return this.bookList[this.bookIndex - 1];
  }

  changeCurrentBook(currentIndex) {
    this.bookIndex = currentIndex;
  }
}

class Book {
  constructor(title, category, author, finishedDate, isRead = false) {
    this.title = title;
    this.category = category;
    this.author = author;
    this.isRead = isRead;
    this.finishedDate = finishedDate;
  }

  markBookAsRead() {
    const today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1;
    let day = today.getDate();

    if (day < 10) day = "0" + day;
    if (month < 10) month = "0" + month;

    this.isRead = true;
    this.finishedDate = day + "/" + month + "/" + year;
  }
}

let book1 = new Book("To kill a Mocking Bird", "Southern Gothic", "Harper Lee");

let book2 = new Book("The Catcher in the Rye", "Young adult", "J. D. Salinger");

let book3 = new Book(
  "The Hunger Games",
  "Dystopian",
  "Suzanne Collins",
  "03/03/2023",
  true
);

let book4 = new Book(
  "Divergent",
  "Dystopian",
  "Veronica Roth",
  "03/03/2023",
  true
);

book1.markBookAsRead();

console.log(book1);

let bookList1 = new Booklist([book1, book2, book3], 2);

console.log(bookList1);

bookList1.add([book4]);

console.log(bookList1.getCurrentBook());

console.log(bookList1.getPrevBook());

console.log(bookList1.getNextBook());
