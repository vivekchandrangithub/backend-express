const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let books = [];
let authors = [];

// Get all books/authors
app.get('/books', (req, res) => res.json(books));
app.get('/authors', (req, res) => res.json(authors));

// Get book/author by ID
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  res.json(book);
});
app.get('/authors/:id', (req, res) => {
  const author = authors.find(a => a.id === parseInt(req.params.id));
  res.json(author);
});

// Add new book/author
app.post('/books', (req, res) => {
  const newBook = { id: books.length + 1, ...req.body };
  books.push(newBook);
  res.status(201).json(newBook);
});
app.post('/authors', (req, res) => {
  const newAuthor = { id: authors.length + 1, ...req.body };
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
});

// Update book/author
app.put('/books/:id', (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id));
  books[index] = { ...books[index], ...req.body };
  res.json(books[index]);
});
app.put('/authors/:id', (req, res) => {
  const index = authors.findIndex(a => a.id === parseInt(req.params.id));
  authors[index] = { ...authors[index], ...req.body };
  res.json(authors[index]);
});

// Delete book/author
app.delete('/books/:id', (req, res) => {
  books = books.filter(b => b.id !== parseInt(req.params.id));
  res.status(204).end();
});
app.delete('/authors/:id', (req, res) => {
  authors = authors.filter(a => a.id !== parseInt(req.params.id));
  res.status(204).end();
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
