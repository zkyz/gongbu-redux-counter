import React, {Component} from 'react'
import CounterContainer from './CounterContainer'
import {connect} from 'react-redux'
import * as actions from '../actions/index'

class App extends Component {
	render() {
		const {onCreate, onRemove} = this.props

		return (
			<div>
				<button type="button" onClick={onCreate}>+</button>
				<button type="button" onClick={onRemove}>-</button>
				<CounterContainer />
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => ({
	onCreate: () => dispatch(actions.create()),
	onRemove: () => dispatch(actions.remove())
})

export default connect(null, mapDispatchToProps)(App)