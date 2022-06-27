import { useState } from "react";
import BooksForm from "./components/BooksForm/BooksForm";
import BooksList from "./components/BooksList/BooksList";

const App = () => {

  const [books, setBooks] = useState([
    { id: 1, title: 'of Mice and Man', author: 'John Steinbeck' },
    { id: 2, title: 'the Witcher', author: 'Andrzej Sapkowski' }
  ]);

  const removeBook = bookId => {
    setBooks(books.filter(book => book.id !== bookId))
  };

  const addBook = newBook => {
    setBooks([...books, { 
      id: Math.random().toString(), 
      title: newBook.title, 
      author: newBook.author }]);
  }

  return (
    <div>
      <h1>Books App</h1>
      <BooksList books={books} removeBook={removeBook} />
      <BooksForm addBook={addBook} />
    </div>
  );
};

export default App;
