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
      <h1>CodeSquad Comics</h1>
      <p class="index-top-p">
        CodeSquad Comics is a collection of graphic novels read by Aya Yamamoto.
        The site is intended to display comic book covers along with information
        about each book, including the author, a rating, and other details about
        the graphic novel. Browse through the complete collection below. Click
        on the cover image or the Details link to see even more information for
        each graphic novel including the publisher, genre, number of pages, and
        a brief synopsis. The About page includes meta information about this
        collection. Login is only available to the site administrator at this
        time.
      </p>
      <h2>Complete Collection</h2>
      <div className="book-container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          books.map((book) => (
            <div key={book._id} className="container-single-book-index">
              <a href={`/books/${book._id}`}>
                <img
                  className="image-cover-index"
                  src={`/images/${book.image}`}
                  alt={book.title}
                />
              </a>
              <br />
              <p>{book.title}</p>
              <p>{book.rating} stars</p>
              <a href={`/books/${book._id}`}>Details</a>
            </div>
          ))
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
