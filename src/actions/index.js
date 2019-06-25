import axios from 'axios';

export const FETCH_CARDS = "fetch-card";

const URL = "http://static.pushe.co/challenge/json";

export function fetchCards() {
    return (dispatch)=>{
        return axios.get(URL).then(response =>{
            dispatch(fetchCardsSuccessful(response.data))
        })
    }
}

export function fetchCardsSuccessful(data) {
    return {
        type: FETCH_CARDS,
        payload: data.cards
    }
}

