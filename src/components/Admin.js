import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Admin = ({ user }) => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isDeleted, setIsDeleted] = useState(false);

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
          throw new Error(response.error);
        }
      })
      .catch((error) => console.log(error));
  }, [isDeleted]);

  const handleDeleteBook = (bookId) => {
    setIsDeleted(false);
    const deleteConfirmation = window.confirm("Do you really want to delete?");

    if (deleteConfirmation) {
      fetch(`http://localhost:8080/api/books/delete/${bookId}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((response) => {
          console.log(response);
          if (response.statusCode === 200) {
            setIsDeleted(true);
          } else {
            throw new Error(response.error.message);
          }
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <React.Fragment>
      <h1>Admin</h1>
      <p>Welcome, {user.firstName}</p>

      <p>
        <a href="/create">Create a New Book</a>
      </p>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
              <th>Rating</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book) => (
              <tr key={book._id}>
                <td>{book.title}</td>
                <td>{book.author}</td>
                <td>{book.rating}</td>
                <td>
                  <Link to={`/books/${book._id}/update`}>Update</Link>
                </td>
                <td onClick={() => handleDeleteBook(book._id)}>Delete</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
};

export default Admin;
