import React, {Component} from 'react';
import Shelf from '../components/Shelf';
import FloatActionButton from '../components/FloatActionButton';
import {getAll} from '../BooksAPI';
import 'bootstrap/dist/css/bootstrap.css';

export default class Home extends Component {
  async componentDidMount() {
    try {
      const books = await getAll();
      this.props.addBooks(books);
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    const {currentlyReading, wantToRead, read, moveBook} = this.props;
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <Shelf
            title='Currently Reading'
            books={currentlyReading}
            moveBook={moveBook}
          />
          <Shelf title='Want to Read' books={wantToRead} moveBook={moveBook} />
          <Shelf title='Read' books={read} moveBook={moveBook} />
        </div>
        <FloatActionButton />
      </div>
    );
  }
}
