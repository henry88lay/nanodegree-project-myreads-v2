import React, {Component} from 'react';
import {update} from '../BooksAPI';

export default class Book extends Component {
  handleChange = async e => {
    e.persist();
    try {
      const shelf = e.target.value;
      const book = this.props;
      const result = await update(book, shelf);
      this.props.moveBook(book, shelf, result);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    const {imageLinks, shelf, title, authors} = this.props;
    return (
      <li>
        <div className='book'>
          <div className='book-top'>
            <div
              className='book-cover'
              style={{
                width: 128,
                height: 193,
                backgroundImage: `url(${
                  imageLinks ? imageLinks.thumbnail : ''
                })`
              }}
            />
            <div className='book-shelf-changer'>
              <select onChange={this.handleChange} value={shelf}>
                <option value='move' disabled>
                  Move to...
                </option>
                <option value='currentlyReading'>Currently Reading</option>
                <option value='wantToRead'>Want to Read</option>
                <option value='read'>Read</option>
                <option value='none'>None</option>
              </select>
            </div>
          </div>
          <div className='book-title'>{title}</div>
          <div className='book-authors'>
            {authors ? authors[0] : 'No Author'}
          </div>
        </div>
      </li>
    );
  }
}
