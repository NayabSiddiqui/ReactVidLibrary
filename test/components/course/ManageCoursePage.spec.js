import {should} from 'chai';
should();
import React from 'react';
import {mount, shallow} from 'enzyme';
import {ManageCoursePage} from '../../../src/components/course/ManageCoursePage';

describe('Manage Course Page', () => {

    it('should set error message when trying to save empty title', () => {
        const props = {
            course: {
                id: '',
                watchHref: '',
                title: '',
                authorId: '',
                length: '',
                category: ''
            },
            authors: [],
            actions: {
                saveCourse: () => {
                    return Promise.resolve();
                }
            }
        };
        const wrapper = mount(<ManageCoursePage {...props}/>);
        const saveButton = wrapper.find('input').last();
        saveButton.prop('type').should.equal('submit');
        saveButton.simulate('click');
        wrapper.state().errors.title.should.equal('Title must be at least 5 characters.');
    });
});