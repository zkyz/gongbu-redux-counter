import * as ActionTypes from './ActionTypes'

export const increase = () => ({
	type: ActionTypes.INCREMENT
})

export const decrease = () => ({
	type: ActionTypes.DECREMENT
})

export const setColor = (color) => ({
	type: ActionTypes.SET_COLOR,
	color
})