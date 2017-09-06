// state argument is not application state, only the state this reducer is responsible for
// reducers are only called when an action takes place
// reducers can take 2 params: state & action
export default function(state = null, action) {
	// when the application first boots up, we dont have any application state, it hasnt been defined yet
	// note that our application state is assembled entirely by all our reducers

	switch (action.type) {
		case 'BOOK_SELECTED':
			return action.payload
	}
	return state
}
