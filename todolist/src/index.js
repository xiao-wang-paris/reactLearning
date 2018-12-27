import './index.css';

import App from './components/App';
import {Provider} from 'react-redux';
import React from 'react';
import {createStore} from 'redux';
import {render} from 'react-dom';
import rootReducer from './reducers';

const store = createStore(rootReducer)

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
// serviceWorker.unregister();
