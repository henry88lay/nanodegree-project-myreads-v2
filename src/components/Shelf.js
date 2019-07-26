import React from 'react';
import Book from './Book';

export default function Shelf(props) {
  const {books, moveBook, title} = props;
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{title}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books &&
            books.map(book => (
              <Book key={book.id} {...book} moveBook={moveBook} />
            ))}
        </ol>
      </div>
    </div>
  );
}
