import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'
import reducers from './reducers'
import './index.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'

/* eslint-disable */
const enhancer = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
/* eslint-enable */

const store = createStore(reducers, enhancer)

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
)
