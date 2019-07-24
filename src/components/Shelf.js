import React, {Component} from 'react';
import Book from './Book';

export default class Shelf extends Component {
  render() {
    const {books, moveBook, title} = this.props;
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
}
