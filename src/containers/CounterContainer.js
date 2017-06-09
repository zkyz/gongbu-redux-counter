import {connect} from 'react-redux'
import * as actions from '../actions/index'
import CounterList from '../components/CounterList'

const mapStateToProps = (state) => {
	return ({
		counter: state.counter,
		color:   state.color
	})
}

const mapDispatchToProps = (dispatch) => ({
	onIncrease: (index) => dispatch(actions.increase(index)),
	onDecrease: (index) => dispatch(actions.decrease(index)),
	onSetColor: (index) => {
		const rgb = [
			Math.floor(Math.random() * 256).toString(16),
			Math.floor(Math.random() * 256).toString(16),
			Math.floor(Math.random() * 256).toString(16)]

		rgb.map((i) => i.length === 2 ? i.toString() : '0' + i)
		dispatch(actions.setColor(index, `#${rgb.join('')}`))
	}
})

const CounterContainer = connect(mapStateToProps, mapDispatchToProps)(CounterList)

export default CounterContainer
