import * as ActionTypes from './ActionTypes'

export const create = () => ({
	type: ActionTypes.CREATE
})
export const remove = () => ({
	type: ActionTypes.REMOVE
})
export const increase = (index) => ({
	type: ActionTypes.INCREMENT,
	index
})

export const decrease = (index) => ({
	type: ActionTypes.DECREMENT,
	index
})

export const setColor = (index, color) => ({
	type: ActionTypes.SET_COLOR,
	color,
	index
})