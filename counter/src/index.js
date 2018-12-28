import Counter from './components/Counter'
import React from 'react';
import ReactDOM from 'react-dom';
import count from './reducers/index'
import {createStore} from 'redux'

const store = createStore(count)
const rootElement = document.getElementById('root')

const render = ()=> ReactDOM.render(<Counter 
    value={store.getState()}
    onIncrement={()=> store.dispatch({type:'INCREMENT'})}
    onDecrement={()=>store.dispatch({type:'DECREMENT'})}
/>, rootElement)

render()
store.subscribe(render)