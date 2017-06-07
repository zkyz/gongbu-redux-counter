import * as ActionTypes from '../actions/ActionTypes'
const initialState = {
	number: 0,
	color: '#000'
}

export default function counter(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.INCREMENT:
			return {
				...state,
				number: state.number++
			}
		case ActionTypes.DECREMENT:
			return {
				...state,
				number: state.number--
			}
		case ActionTypes.SET_COLOR:
			return {
				...state,
				color: action.color
			}
	}

	return state
}