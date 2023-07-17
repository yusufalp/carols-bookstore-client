import React from 'react';

const Book = ({ book }) => {
  return (
    <div className="book-row">
      <a href={`books/${book._id}`}>
        <img src={`/images/${book.image}`} alt={book.title} />
      </a>
      <p>{book.title}</p>
      <p><em>by</em>{book.author}</p>
    </div>
  );
};

export default Book;