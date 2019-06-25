import expect from 'expect';
import {CardsMock} from './tests/cardsMock'
import reducer from './reducers/cards-reducer'
import * as actions from './actions/index'

describe('post reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({});
    });


    it('should handle GET_POST_SUCCESS', () => {
        const successAction = {
            type: actions.FETCH_CARDS,
            payload: CardsMock.data, // important to pass correct payload, that's what the tests are for ;)
        };
        expect(reducer({}, successAction)).toEqual(CardsMock.data);
    });


});