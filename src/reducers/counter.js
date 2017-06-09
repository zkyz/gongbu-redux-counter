import * as ActionTypes from '../actions/ActionTypes'
import {slice} from 'lodash'

let initialState = {
	counter: [{
		number: 0,
		color:  '#000'
	}]
}
const counter = (state = initialState, action) => {
	const i = action.index || 0

	switch (action.type) {
		case ActionTypes.CREATE:
			return {
				counter: [
					...state.counter,
					{
						number: 0,
						color:  '#000'
					}
				]
			}
		case ActionTypes.REMOVE:
			return {
				counter: [...slice(state.counter, 0, -1)]
			}
		case ActionTypes.INCREMENT:
			return {
				counter: [
					...slice(state.counter, 0, i),
					{
						number: state.counter[i].number + 1,
						color:  state.counter[i].color
					},
					...slice(state.counter, i + 1)
				]
			}
		case ActionTypes.DECREMENT:
			return {
				counter: [
					...slice(state.counter, 0, i),
					{
						number: state.counter[i] - 1,
						color:  state.counter[i].color
					},
					...slice(state.counter, i + 1)
				]
			}
		case ActionTypes.SET_COLOR:
			return {
				counter: [
					...slice(state.counter, 0, i),
					{
						number: state.counter[i].number,
						color:  action.color
					},
					...slice(state.counter, i + 1)
				]
			}
		default:
			return state
	}
}

export default counter