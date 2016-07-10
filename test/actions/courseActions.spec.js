import {should} from 'chai';
should();
import * as courseActions from '../../src/actions/courseActions';
import * as types from '../../src/constants/actionTypes';

import thunk from 'redux-thunk';
import nock from 'nock';
import configureMockStore from 'redux-mock-store';

//Test a sync action
describe('Course Actions', () => {

    it('should create a CREATE_COURSE_SUCCESS action', () => {
        const course = {id: 'clean-code', title: 'Clean Code'};
        const expectedAction = {
            type: types.CREATE_COURSES_SUCCESS,
            course: course
        };

        const action = courseActions.createCourseSuccess(course);

        action.type.should.equal(expectedAction.type);
        action.course.should.equal(expectedAction.course);
    });
});

const middleware = [thunk];
const mockStore = configureMockStore(middleware);

describe('Async Actions', () => {

    afterEach(() => {
        nock.cleanAll();
    });

    it('should create BEGIN_AJAX_CALL and LOAD_COURSES_SUCCESS when loading courses', (done) => {
        /*nock('http://example.com')
         .get('./courses')
         .reply(200, {body: {courses: [{id: 1, firstName: 'Cory', lastName: 'House'}]}});*/

        const expectedActions = [
            {type: types.BEGIN_AJAX_CALL},
            {type: types.LOAD_COURSES_SUCCESS, body: {courses: [{id: 1, firstName: 'Cory', lastName: 'House'}]}}
        ];

        const store = mockStore({courses: []}, expectedActions);
        store.dispatch(courseActions.loadCourses())
            .then(() => {
                const actions = store.getActions();
                actions[0].type.should.equal(types.BEGIN_AJAX_CALL);
                actions[1].type.should.equal(types.LOAD_COURSES_SUCCESS);
                done();
            })
    });
});
