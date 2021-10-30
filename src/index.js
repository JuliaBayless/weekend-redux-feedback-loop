import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';

//dummy data so the page doesn't have an empty object on refresh
const feedBackDummyData = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
    flagged: false,
    date: ''
}
//reducer thats holding all the info from feedback
//each action sets a key : value for data being sent to server
const feedbackReducer = (state = feedBackDummyData, action) => {
    if(action.type === "SUBMIT_FEELING") {
        return{ ...state, feeling: action.payload};
    } else if (action.type === "SUBMIT_UNDERSTANDING") {
        return{ ...state, understanding: action.payload};
    } else if (action.type === "SUBMIT_SUPPORT") {
        return{ ...state, support : action.payload};
    } else if (action.type === "SUBMIT_COMMENTS") {
        return{ ...state, comments : action.payload};
    }
    return state
};

//create the store!
const storeInstance = createStore(
combineReducers({
    feedbackReducer
}),
    applyMiddleware(logger)
);

ReactDOM.render(
//react and redux communicate here!
<Provider store={storeInstance}>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
