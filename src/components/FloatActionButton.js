import React from 'react';
import {Link} from 'react-router-dom';

export default function FloatActionButton() {
  return (
    <div className='open-search'>
      <Link to={'/search'}>
        <button>Add a book</button>
      </Link>
    </div>
  );
}
