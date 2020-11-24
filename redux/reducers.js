import { combineReducers } from 'redux';

// only for initial state
import { PAGE_STATE_HOME, PAGE_STATE_SIGN_UP } from "./actionTypes";

// Component Management
import { UPDATE_PAGE_STATE } from "./actionTypes";

const initialState = {
	pageState: PAGE_STATE_HOME,
}

function reducer( state = initialState, payload ) {

	switch ( payload.type ) {
		case UPDATE_PAGE_STATE: {
			return { ...state, pageState: payload.pageState };
		}
    default: {
      return { ...state }
    }
	}
}


export default combineReducers({
	reducer,
})
