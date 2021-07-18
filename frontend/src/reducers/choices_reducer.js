import { RECEIVE_CHOICES, RECEIVE_USER_CHOICES, RECEIVE_NEW_CHOICE } from '../actions/choice_actions';

const ChoicesReducer = (state = { all: {}, user: {}, new: undefined }, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_CHOICES:
            newState.all = action.choices.data;
            return newState;
        case RECEIVE_USER_CHOICES:
            newState.user = action.choices.data;
            return newState;
        case RECEIVE_NEW_CHOICE:
            newState.new = action.choice.data
            return newState;
        default:
            return state;
    }
};

export default ChoicesReducer;