// an ActionCreator is just a function; selectBook just takes in a book object with title
export function selectBook(book) {
	// selectBook is an ActionCreator, it needs to return an action
	// an object with a type property
	// actions usually have 2 properties: type and payload
	// payload further clarifies the condition of the action that's being triggered; it's the action that was taken
	// type describes the purpose of the action, always in uppercase, usually a string, separated by keywords if multiple keywords
	return {
		type: 'BOOK_SELECTED',
		payload: book,
	}
}
