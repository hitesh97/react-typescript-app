import { reducer } from './reducer';
import expect from 'expect';
import * as countersActions from './actions';
import {ADD, INCREMENT} from './action-constants';

describe('reducer tests', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual({"reduxCounter": 0});
    });
    
    it('should increment counter in state on increment action', () => {
        expect(reducer({reduxCounter: 1}, {type: INCREMENT}))
        .toEqual({reduxCounter: 2 });
    });
    it('should add counter in state on add action', () => {
        expect(reducer({reduxCounter: 1}, {type: ADD, payload: 1}))
        .toEqual({reduxCounter: 2 });
    });
});
