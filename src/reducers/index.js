import {combineReducers} from 'redux';
import CardsReducers from './cards-reducer';


const rootReducers = combineReducers({
    reduxState: CardsReducers
});


export default rootReducers

