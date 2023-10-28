import React, { useEffect, useState } from "react";
import Book from "./Book";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8080/api/books", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.statusCode === 200) {
          setBooks(response.data);
          setIsLoading(false);
        } else {
          throw new Error(response.error.message);
        }
      })
      .catch((error) => console.log(error.message));
  }, []);

  return (
    <React.Fragment>
      <h1>Books</h1>
      <div className="book-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          books.map((book) => <Book key={book._id} book={book} />)
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
