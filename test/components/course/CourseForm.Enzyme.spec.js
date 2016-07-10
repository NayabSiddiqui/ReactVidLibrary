import {should} from 'chai';
should();
import React from 'react';
import {mount, shallow} from 'enzyme';
import CourseForm from '../../../src/components/course/CourseForm';

function setup(saving = false) {
    const props = {
        course: {}, loading: saving, errors: {},
        onSave: () => {},
        onChange: () => {}
    };

    return shallow(<CourseForm {...props}/>);
}

describe('Course From via Enzyme', () => {
    it('should render form and h1 tags', () => {
        const wrapper = setup();
        wrapper.find('form').length.should.equal(1);
        const h1 = wrapper.find('h1');
        h1.length.should.equal(1);
        h1.text().should.equal('Manage Course');
    });

    it('should label save button "save" when not saving', () => {
        const wrapper = setup(false);
        wrapper.find('input').props().value.should.equal('Save');
    });

    it('should label save button "saving..." when saving', () => {
        const wrapper = setup(true);
        wrapper.find('input').props().value.should.equal('Saving...');
    });
});
