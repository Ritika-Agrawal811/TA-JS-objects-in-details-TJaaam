class BookList {
  constructor(root, list = []) {
    this.list = list;
    this.root = root;
  }

  addBook(book) {
    this.list.push(book);
    this.createListUI();
  }

  createListUI() {
    let book = this.list[this.list.length - 1];
    this.root.append(book.createUI());
  }
}

class Book {
  constructor(title, author, isRead = false) {
    this.title = title;
    this.author = author;
    this.isRead = isRead;
  }

  createUI() {
    let row = document.createElement("tr");

    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    row.innerHTML = `<td>${this.title}</td>
     <td>${this.author}</td>
     <td> <span class="delete-book">x</span></td>`;

    console.log(checkbox);

    return row;
  }
}

let bookForm = document.getElementById("book-form");
let titleInput = document.getElementById("bookTitle");
let authorInput = document.getElementById("bookAuthor");
let bookListTable = document.querySelector(".booklist-table");

let bookList = new BookList(bookListTable);

bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  let title = titleInput.value;
  let author = authorInput.value;

  let book = new Book(title, author);
  bookList.addBook(book);

  titleInput.value = "";
  authorInput.value = "";
});
