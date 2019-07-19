import React, {Component} from 'react';
import {Link} from 'react-router-dom';

export default class FloatActionButton extends Component {
  render() {
    return (
      <div className='open-search'>
        <Link to={'/search'}>Add a book</Link>
      </div>
    );
  }
}
