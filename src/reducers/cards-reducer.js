import {FETCH_CARDS} from "../actions/index";

export default function (state = {}, action) {

    switch (action.type){
        case FETCH_CARDS:{
            const newState = Object.assign({}, state, {cards: action.payload});

            return newState;
        }

        default:
            return state;
    }
}