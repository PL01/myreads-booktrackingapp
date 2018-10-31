import React from 'react'
import { Link } from 'react-router-dom';
import Shelf from '../Shelf';
import * as BooksAPI from '../../BooksAPI'

class MainPage extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			books: []
		}
	}
	componentDidMount(){
		BooksAPI.getAll()
		.then(resp => { 
			console.log(resp); 
			this.setState({ books: resp }); 
		})
	}
   updateBook = (book, shelf) => {
      BooksAPI.update(book, shelf)
      .then(resp => {
         book.shelf = shelf;
         this.setState(state => ({
            books: state.books.filter(b => b.id !== book.id).concat(book)
         }))
      })
    }

	/*
		The function makes a call to get the books from the BookApi
	*/


	render(){
		/*
			Shelf tag is a component that we defined in Shelf.js
			"this.state.books.filter" will return the array of books 
			based on string "currentlyReading", "wantToRead", and "read"
		*/
		return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
              	<Shelf updateBook={this.updateBook} name="Currently Reading" book={this.state.books.filter(b => b.shelf === "currentlyReading")}/>
              	<Shelf updateBook={this.updateBook} name="Want to Read" book={this.state.books.filter(b => b.shelf === "wantToRead")}/>
                <Shelf updateBook={this.updateBook} name="Read" book={this.state.books.filter(b => b.shelf === "read")}/>
              </div>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
		);
	}
}

export default MainPage;