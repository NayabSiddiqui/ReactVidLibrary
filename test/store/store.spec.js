import {should} from 'chai';
should();
import {createStore} from 'redux';
import rootReducer from '../../src/reducers/index';
import initialState from '../../src/reducers/initialState';
import * as courseActions from '../../src/actions/courseActions';

describe('Store', () => {

    it('should handle creating courses', () => {
        const store = createStore(rootReducer, initialState);
        const course = {
            title: 'Clean Code'
        };

        const action = courseActions.createCourseSuccess(course);
        store.dispatch(action);

        const actual = store.getState().courses[0];
        actual.should.deep.equal({title: 'Clean Code'});
    });
});
