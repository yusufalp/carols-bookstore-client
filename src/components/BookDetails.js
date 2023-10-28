import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const BookDetails = () => {
  const { bookId } = useParams();

  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:8080/api/books/${bookId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        if (response.statusCode === 200) {
          setBook(response.data);
          setIsLoading(false);
        } else {
          throw new Error(response.error.message);
        }
      })
      .catch((error) => console.log(error));
  }, [bookId]);

  return (
    <div className="book-row">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <React.Fragment>
          <h1>{book.title}</h1>
          <p>
            <img src={`/images/${book.image}`} alt={`${book.title}`} />
          </p>
          <p>{book.synopsis}</p>
          <p>Author: {book.author}</p>
          <p>Publisher: {book.publisher}</p>
          <p>Genre: {book.genre}</p>
          <p>Pages: {book.pages}</p>
          <p>Rating: {book.rating}</p>
        </React.Fragment>
      )}
    </div>
  );
};

export default BookDetails;
