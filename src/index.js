import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

import { BrowserRouter } from 'react-router-dom'
/*
	In this file, we added ReactDOM. This is where all the magic happens.
	In other words, ReactDOM is an event listener that will render all the 
	html contents.
*/

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, 
	document.getElementById('root')
)
