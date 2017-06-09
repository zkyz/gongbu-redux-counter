import * as ActionTypes from '../actions/ActionTypes'

const init = ['#000','#000','#000']

const color = (state = init, action) => {
	switch (action.type) {
		case ActionTypes.SET_COLOR:
			let result = [...state]
			result[action.index||0] = action.color
			return result
		default:
			return state
	}
}

export default color