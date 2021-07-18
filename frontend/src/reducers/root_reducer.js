import { combineReducers } from 'redux';
import session from './session_reducer';
import errors from './errors_reducer';
import choices from './choices_reducer'

const RootReducer = combineReducers({
    session,
    errors,
    choices
});

export default RootReducer;