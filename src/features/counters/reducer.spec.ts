import { reducer, ToDoreducer } from './reducer';
import expect from 'expect';
import * as countersActions from './actions';
import {ADD, INCREMENT, ADD_TODO, REMOVE_TODO} from './action-constants';
import { ITodo, Todo } from '../todo/interfaces';

describe('reducer tests', () => {
    /*
    describe('reduxCounter tests', () => {
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
    */

    describe('ToDoreducer tests', () => {
        it('should return the initial state', () => {
            expect(ToDoreducer(undefined, {})).toEqual({"toDos":new Array<ITodo>()});
        });
        it('should add new todo to state', () => {
            const todoText : string ='test_todo';
            const newToDo: ITodo = new Todo();
            newToDo.id = 1;
            newToDo.text = todoText;
            expect(ToDoreducer(undefined, {type: ADD_TODO, payload: todoText }))
            .toEqual({"toDos":[newToDo]});
        });
        it('should add second todo in the state', () => {
            const todoText1 : string ='test_todo';
            const expectedToDo1: ITodo = new Todo();
            expectedToDo1.id = 1;
            expectedToDo1.text = todoText1;

            const todoText2 : string ='test_todo1';
            const expectedToDo2: ITodo = new Todo();
            expectedToDo2.id = 2;
            expectedToDo2.text = todoText2;

            expect(ToDoreducer({toDos: [expectedToDo1]}, {type: ADD_TODO, payload: todoText2 }))
            .toEqual({"toDos":[expectedToDo1, expectedToDo2]});
        });  
        it('should remove todo from the state', () => {
            const todoText1 : string ='test_todo';
            const expectedToDo1: ITodo = new Todo();
            expectedToDo1.id = 1;
            expectedToDo1.text = todoText1;

            const todoText2 : string ='test_todo1';
            const expectedToDo2: ITodo = new Todo();
            expectedToDo2.id = 2;
            expectedToDo2.text = todoText2;

            expect(ToDoreducer({toDos: [expectedToDo1, expectedToDo2]}, {type: REMOVE_TODO, payload: 2 }))
            .toEqual({"toDos":[expectedToDo1]});
        });  
    })
});
