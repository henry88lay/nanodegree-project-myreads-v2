import React from 'react';
import {Switch, Route} from 'react-router-dom';
// import * as BooksAPI from './BooksAPI'
import './App.css';
import Home from './Pages/Home';
import Search from './Pages/Search';

class BooksApp extends React.Component {
  render() {
    return (
      <div className='app'>
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/search'} component={Search} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
