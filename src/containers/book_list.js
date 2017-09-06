import React, { Component } from 'react'
import { connect } from 'react-redux'
import { selectBook } from '../actions/index'
// make sure that the action created by the ActionCreator flows thru all the diff reducers
import { bindActionCreators } from 'redux'

class BookList extends Component {
	renderList() {
		return this.props.books.map(book => {
			return (
				<li
					key={book.title}
					onClick={() => this.props.selectBook(book)}
					className="list-group-item">
					{book.title}
				</li>
			)
		})
	}

	render() {
		return <ul className="list-group col-sm-4">{this.renderList()}</ul>
	}
}

// the purpose of this function is to take state (contains the array of books and the active book) as an argument
// if the application state changes (a new book is added to the list, someone clicks) this function will make the container re-render
function mapStateToProps(state) {
	// whatever is returned will show up as props inside of BookList
	// we usually return an object from this function; whatever is contained within this object is set to this.props of our component (they're going to show up as props in this component)
	return {
		books: state.books,
	}
}

// anything returned from this function will end up as props on the BookList container
function mapDispatchToProps(dispatch) {
	// the value selectBook below is the ActionCreator defined at the top
	// whenever selectBook is called, result should be passed to all of our Reducers
	// the dispatch function is what takes all of the functions, receives them like a funnel then spits them back out to all reducers in our app
	return bindActionCreators({ selectBook: selectBook }, dispatch)
}

// let's use connect
// connect takes a function-mapStateToProps and a component and produces/return/export a container (component that's aware of the state that is contained by redux)
// promote BookList from a component to a container - it needs to know about this new dispatch method, selectBook. Make it available as a prop
export default connect(mapStateToProps, mapDispatchToProps)(BookList)
