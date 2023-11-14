import React, { useEffect, useState } from "react";

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
          books.map((book) => (
            <div key={book._id} className="container-single-book-index">
              <a href="#">
                <img
                  className="image-cover-index"
                  src={`/images/${book.image}`}
                  alt={book.title}
                />
              </a>
              <br />
              <p>{book.title}</p>
              <p>{book.rating} stars</p>
              <a href="#">Details</a>
            </div>
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
