import React, {Component} from 'react';

export default class FloatActionButton extends Component {
  render() {
    return (
      <div className='open-search'>
        <button onClick={() => this.setState({showSearchPage: true})}>
          Add a book
        </button>
      </div>
    );
  }
}
