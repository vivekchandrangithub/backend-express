import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/books')
      .then(response => response.json())
      .then(data => setBooks(data));
  }, []);

  return (
    <div className="App">
      <h1>Books</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>{book.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
