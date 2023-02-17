function filterBooks() {
    const bookList = prompt("Введите список книг через запятую:");
    const books = bookList.split(",");

    const booksWithU = [];
    const otherBooks = [];

    for (let i = 0; i < books.length; i++) {
        if (books[i].includes("у")) {
            booksWithU.push(books[i]);
        } else {
            otherBooks.push(books[i]);
        }
    }

    console.log("Книги с буквой 'у':");
    console.log(booksWithU);

    console.log("Остальные книги:");
    console.log(otherBooks);
}
filterBooks();