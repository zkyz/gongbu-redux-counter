import {connect} from 'react-redux'
import * as actions from '../actions/index'
import CounterList from '../components/CounterList'

const mapStateToProps = (state) => {
	return state
}

const mapDispatchToProps = (dispatch) => ({
	onIncrease: (index) => {
		dispatch(actions.increase(index))
	},
	onDecrease: (index) => dispatch(actions.decrease(index)),
	onSetColor: (index) => {
		const rgb = [
			('0' + Math.floor(Math.random() * 256).toString(16)).slice(-2),
			('0' + Math.floor(Math.random() * 256).toString(16)).slice(-2),
			('0' + Math.floor(Math.random() * 256).toString(16)).slice(-2)
		]

		dispatch(actions.setColor(index, `#${rgb.reduce((a, b) => a + b)}`))
	}
})

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList)

export default CounterContainer
