import * as React from 'react'
import Counter from './Counter'

const CounterList = ({counter, onIncrease, onDecrease, onSetColor}) => {
	console.log(counter)
	return (
		<div className="CounterList">
			{
				counter.map(
					(item, index) => {
						return (
							<Counter key={index}
							         number={item.number}
							         color={item.color}
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
					}
				)
			}
		</div>
	)
}

export default CounterList
