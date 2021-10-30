import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';


const feedBackDummyData = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
    flagged: false,
    date: ''
}
//reducer thats holding all the info from feedback
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



ReactDOM.render(

<Provider>
<App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
