import BookCard from "./components/BookCard";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([
    {
      volumeInfo: {
        title: "Test Book",
        description: "This book is lovely",
        imageLinks: {
          smallThumbnail: "",
        },
      },
    },
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
     const timeoutId = setTimeout(() => fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data.items) {
          setBooks(data.items);
        }
      }), 1000);

      return () => clearTimeout(timeoutId)
  }, [searchTerm]);

  return (
    <div className="App">
      <h1>Welcome to Book Lover!</h1>
      <h2>Search:</h2>
      <input value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)}/>
      {books.map((book, i) => (
        <BookCard
          key={i}
          title={book.volumeInfo.title}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : ""}
        />
      ))}
    </div>
  );
}

export default App;
