function callback(titles) {
    titles.sort();
    titles.forEach(title => console.log(title));
}

function extractTitles(books, callback) {
    const titles = books.map(book => book.title);
    callback(titles);
}


const books = [
    {title: "1984", author: "George Orwell", year: 1949},
    {title: "To Kill a Mockingbird", author: "Harper Lee", year: 1960},
    {title: "The Great Gatsby", author: "F. Scott Fitzgerald", year: 1925},
    {title: "Pride and Prejudice", author: "Jane Austen", year: 1813}
];

extractTitles(books, callback);
