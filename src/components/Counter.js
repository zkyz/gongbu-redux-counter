import React from 'react'
import PropTypes from 'prop-types'
import './Counter.css'

const Counter = ({number, color, onSetColor, onIncrease, onDecrease}) => (
	<div className="Counter"
	     onClick={onIncrease}
	     onContextMenu={
		     (e) => {
		     	  e.preventDefault()
			     onDecrease()
		     }
	     }
	     onDoubleClick={onSetColor}
	     style={
		     {
		     	backgroundColor: color
		     }
	     }
	>
		{number}
	</div>
)

Counter.propTypes = {
	number: PropTypes.number,
	color:  PropTypes.string,
	onSetColor: PropTypes.func,
	onIncrease: PropTypes.func,
	onDecrease: PropTypes.func
}

Counter.defaultProps = {
	number: 0,
	color: '#000',
	onSetColor: () => console.log('set color'),
	onIncrease: () => console.log('increase'),
	onDecrease: () => console.log('decrease')
}

export default Counter
