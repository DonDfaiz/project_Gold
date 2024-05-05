const getBook = `SELECT * FROM books`;
const addBook = `INSERT INTO books (title, author, publisher) VALUES ($1, $2, $3)`;
const bookDetail = `SELECT title, author, publisher FROM books WHERE id = $1`;
const oldDetail = `SELECT title, author, publisher FROM books WHERE id = $1`;
const newDetail = `UPDATE books SET title = $1, author = $2, publisher = $3 WHERE id = $4`;
const deleteData = `DELETE FROM books WHERE id = $1`;
module.exports = {
  getBook,
  addBook,
  bookDetail,
  oldDetail,
  newDetail,
  deleteData,
};
