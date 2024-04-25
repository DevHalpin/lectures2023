import BookCard from "./components/BookCard";
import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [time, setTime] = useState(new Date());

  //Debounce was not working as it needed to be in the useEffect instead of a separate function so that the cleanup can be done
  // when the component unmounts

  // Here is a working version of the debounce for data fetching
  useEffect(() => {
    // Create a setTimeout to fetch data after 1 second
    const timeoutId = setTimeout(() => {
      console.log("fetching data");
      if (!searchTerm) return; // Don't fetch if empty
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=${searchTerm}`)
        .then((response) => {
          console.log("Data fetched:", response.data.items)
          setBooks(response.data.items);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    }, 1000);

    // If we have a new search term causing a re-render, clear the previous setTimeout so it doesn't fetch anymore
    return () => {
      console.log("cleanup old timeout: ", timeoutId);
      clearTimeout(timeoutId);
    };
  }, [searchTerm]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      console.log("Re-render detected, cleaning up interval for clock");
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    console.log("Time changed, updating title");
    document.title = `Time: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;
  }, [time]);

  return (
    <div>
      <h1>Welcome to Book Lover!</h1>
      <h2>Search:</h2>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <h2>{`Time: ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`}</h2>
      {books.map((book, index) => (
        <BookCard
          key={index}
          title={book.volumeInfo.title}
          description={book.volumeInfo.description}
          image={book.volumeInfo.imageLinks?.smallThumbnail}
        />
      ))}
    </div>
  );
}

export default App;
