import React from 'react';
import { useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate();

  const handleCreateFormSubmit = (e) => {
    e.preventDefault();

    const body = {
      title: e.target.title.value,
      author: e.target.author.value,
      publisher: e.target.publisher.value,
      genre: e.target.genre.value,
      pages: e.target.pages.value,
      rating: e.target.rating.value,
      synopsis: e.target.synopsis.value,
    };

    fetch(`http://localhost:5000/api/books/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        if (response.statusCode === 201) {
          navigate('/admin');
        } else {
          throw new Error(response.error.message);
        }
      })
      .catch(error => console.log(error.message));
  };

  return (
    <React.Fragment>
      <h1>Create a new book</h1>

      <form onSubmit={handleCreateFormSubmit}>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" required />
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" required />
        <label htmlFor="publisher">Publisher</label>
        <select name="publisher" id="publisher" required>
          <option value="" disabled>Please select an option</option>
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
        <input type="text" name="genre" id="genre" required />
        <label htmlFor="pages">Pages</label>
        <input type="number" name="pages" id="pages" required />
        <label htmlFor="rating">Rating</label>
        <input type="number" min="1" max="5" name="rating" id="rating" required />
        <label htmlFor="synopsis">Synopsis</label>
        <textarea name="synopsis" id="synopsis" cols="30" rows="10" required> </textarea>
        <button type="submit">Create</button>
      </form>
    </React.Fragment>
  );
};

export default Create;