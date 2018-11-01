import React from 'react'
import './App.css'

/*
  The following libraries below are imported from react-router. 
  These libraries give us the ability to define our pages as components. 
  This gives us the chance for better code readability and cleaner stucture. 
*/
import { Route } from 'react-router-dom'
import MainPage from './components/pages/MainPage';
import SearchPage from './components/pages/SearchPage';

/*
  BookApp component handles routes of the main page (localhost:3000)
  and the search page (localhost:3000/search)
*/

class BooksApp extends React.Component {

  render() {
    return(
      <div>
        <Route exact path="/" component={ MainPage } /> 
        <Route exact path="/search" component={ SearchPage } /> 
      </div>
    );
  }
}

export default BooksApp
