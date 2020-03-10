import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { reducer as formReducer } from 'redux-form';
import rootReduces from './reducers';

const mainReducer = combineReducers({
    root: rootReduces,
    form: formReducer,
});

export default createStore(
    mainReducer,
    composeWithDevTools(),
);
