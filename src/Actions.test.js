
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import expect from 'expect'
import  * as actions from './actions/index';
import {CardsMock} from "./tests/cardsMock";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('fetchCard actions', () => {

    beforeEach(function () {
        moxios.install();
    });

    afterEach(function () {
        moxios.uninstall();
    });

    it('creates FECH_CARDS after getting to static-pushe', () => {
        moxios.wait(() => {
            const request = moxios.requests.mostRecent();
            request.respondWith({
                status: 200,
                response: CardsMock,
            });
        });

        const expectedActions =
            [{ type: actions.FETCH_CARDS, payload: [CardsMock]}]


        const store = mockStore()

        return store.dispatch(actions.fetchCards()).then(() => {
            // return of async actions
            expect(store.getActions()).toEqual(expectedActions);
        });
    });
});