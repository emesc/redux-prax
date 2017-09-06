import { combineReducers } from 'redux'
import BooksReducer from './reducer_books'
import ActiveBook from './reducer_active_book'

const rootReducer = combineReducers({
	books: BooksReducer,
	// any key to the object that we provide to combineReducers ends up as a key on our global state
	activeBook: ActiveBook,
})

export default rootReducer
