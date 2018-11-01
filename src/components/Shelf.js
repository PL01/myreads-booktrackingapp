import React from 'react'
import { Link } from 'react-router-dom';

import Book from './Book';
/*
	Shelf is a component that renders the all the books that in the main page.
	the job of this component is to show the name of the book and to display 
	the books in the "currently reading", "want to read", and "read" section.
*/
class Shelf extends React.Component{
	
	componentDidMount(){
		console.log(this);
	}

	render(){
		return (
			<div className="bookshelf">
                  <h2 className="bookshelf-title">{this.props.name}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                      {
                      	this.props.book.map((book, key) => <Book updateBook={this.props.updateBook} book={book} key={key} />)
                      }
                    </ol>
                  </div>
                </div>
		);
	}
}

export default Shelf;