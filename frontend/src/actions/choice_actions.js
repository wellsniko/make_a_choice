import { getChoices, getUserChoices, writeChoice } from '../util/choice_api_util';

export const RECEIVE_CHOICES = "RECEIVE_CHOICES";
export const RECEIVE_USER_CHOICES = "RECEIVE_USER_CHOICES";
export const RECEIVE_NEW_CHOICE = "RECEIVE_NEW_CHOICE";

export const receiveChoices = choices => ({
    type: RECEIVE_CHOICES,
    choices
});

export const receiveUserChoices = choices => ({
    type: RECEIVE_USER_CHOICES,
    choices
});

export const receiveNewChoice = choice => ({
    type: RECEIVE_NEW_CHOICE,
    choice
})

export const fetchChoices = () => dispatch => (
    getChoices()
        .then(choices => dispatch(receiveChoices(choices)))
        .catch(err => console.log(err))
);

export const fetchUserChoices = id => dispatch => (
    getUserChoices(id)
        .then(choices => dispatch(receiveUserChoices(choices)))
        .catch(err => console.log(err))
);

export const composeChoice = data => dispatch => (
    writeChoice(data)
        .then(choice => dispatch(receiveNewChoice(choice)))
        .catch(err => console.log(err))
);