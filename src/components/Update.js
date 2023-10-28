import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Update = () => {
  const { bookId } = useParams();
  const navigate = useNavigate();

  const [book, setBook] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [postBody, setPostBody] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/api/books/${bookId}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.data);
        setBook(response.data);
      })
      .catch((error) => console.log(error))
      .finally(setIsLoading(false));
  }, [bookId]);

  const handleUpdateFormSubmit = (e) => {
    console.log("update");
    e.preventDefault();

    fetch(`http://localhost:5000/api/books/update/${bookId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postBody),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        navigate("/admin");
      })
      .catch((error) => console.log(error));
  };

  const handleFormFieldChange = (e) => {
    book[e.target.name] = e.target.value;
    setBook({ ...book });

    const body = {
      title: book.title,
      author: book.author,
      publisher: book.publisher,
      genre: book.genre,
      pages: book.pages,
      rating: book.rating,
      synopsis: book.synopsis,
    };

    setPostBody(body);
  };

  return (
    <React.Fragment>
      {isLoading ? (
        <p>isLoading...</p>
      ) : (
        <form onSubmit={handleUpdateFormSubmit}>
          <label htmlFor="title">Title</label>
          <input
            type="text"
            name="title"
            id="title"
            value={book.title}
            onChange={handleFormFieldChange}
          />
          <label htmlFor="author">Author</label>
          <input
            type="text"
            name="author"
            id="author"
            value={book.author}
            onChange={handleFormFieldChange}
          />
          <label htmlFor="publisher">Publisher</label>
          <select
            name="publisher"
            id="publisher"
            value={book.publisher}
            onChange={handleFormFieldChange}
            required
          >
            <option value="">Please select an option</option>
            <option value="BOOM! Box">BOOM! Box</option>
            <option value="DC Comics">DC Comics</option>
            <option value="Harry N. Abrams">Harry N. Abrams</option>
            <option value="Icon Books">Icon Books</option>
            <option value="Image Comics">Image Comics</option>
            <option value="Mariner Books">Mariner Books</option>
            <option value="Marvel">Marvel</option>
            <option value="Simon Schuster">Simon Schuster</option>
            <option value="Top Shelf Productions">Top Shelf Productions</option>
            <option value="VIZ Media LLC">VIZ Media LLC</option>
          </select>
          <label htmlFor="genre">Genre</label>
          <input
            type="text"
            name="genre"
            id="genre"
            value={book.genre}
            onChange={handleFormFieldChange}
          />
          <label htmlFor="pages">Pages</label>
          <input
            type="number"
            name="pages"
            id="pages"
            value={book.pages}
            onChange={handleFormFieldChange}
          />
          <label htmlFor="rating">Rating</label>
          <input
            type="number"
            min="1"
            max="5"
            name="rating"
            id="rating"
            value={book.rating}
            onChange={handleFormFieldChange}
          />
          <label htmlFor="synopsis">Synopsis</label>
          <textarea
            name="synopsis"
            id="synopsis"
            cols="30"
            rows="10"
            value={book.synopsis}
            onChange={handleFormFieldChange}
          ></textarea>
          <button type="submit">Update</button>
        </form>
      )}
    </React.Fragment>
  );
};

export default Update;
