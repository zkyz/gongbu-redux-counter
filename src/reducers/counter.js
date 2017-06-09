import * as ActionTypes from '../actions/ActionTypes'
import {slice} from 'lodash'

export const init = [0, 1, 2]

const counter = (state = init, action) => {
	let result

	switch (action.type) {
		case ActionTypes.CREATE:
			return [...state].push(0)
		case ActionTypes.REMOVE:
			return slice(state, 0, -1)
		case ActionTypes.INCREMENT:
			result = [...state]
			result[action.index||0]++
			return result
		case ActionTypes.DECREMENT:
			result = [...state]
			result[action.index||0]--
			return result
		default:
			return state
	}
}

export default counter