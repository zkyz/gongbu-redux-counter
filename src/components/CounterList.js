import * as React from 'react'
import Counter from './Counter'

const CounterList = ({counter, color, onIncrease, onDecrease, onSetColor}) => (
	<div className="CounterList">
		{
			counter.map(
				(item, index) => (
					<Counter key={index}
					         number={counter[index]}
					         color={color[index]}
					         onIncrease={
						         () => {
							         onIncrease(index)
						         }
					         }
					         onDecrease={
						         () => onDecrease(index)
					         }
					         onSetColor={
						         () => onSetColor(index)
					         }
					/>
				)
			)
		}
	</div>
)

export default CounterList
