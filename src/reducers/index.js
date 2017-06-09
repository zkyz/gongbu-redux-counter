import color from './color'
import {combineReducers} from 'redux'
import counter from './counter'

const reducers = combineReducers({
	color,
	counter
})

export default reducers