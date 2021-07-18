import axios from 'axios';

export const getChoices = () => {
    return axios.get('/api/choices')
};

export const getUserChoices = id => {
    return axios.get(`/api/choices/user/${id}`)
};

export const writeChoice = data => {
    return axios.post('/api/choices/', data)
}
