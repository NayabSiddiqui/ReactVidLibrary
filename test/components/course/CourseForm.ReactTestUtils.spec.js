import {should} from 'chai';
should();
import React from 'react';
import TestUtils from 'react-addons-test-utils';
import CourseForm from '../../../src/components/course/CourseForm';

function setup(saving = false) {
    let props = {
        course: {}, loading: saving, errors: {},
        onSave: () => {},
        onChange: () => {}
    };
    let renderer = TestUtils.createRenderer();
    renderer.render(<CourseForm {...props}/>);
    let output = renderer.getRenderOutput();
    
    return {
        props,
        output,
        renderer
    };
}

describe('CourseForm via React Test Utils', () => {
    it('should render form and h1 tags', () => {
        const {output} = setup();
        output.type.should.equal('form');

        let [h1] = output.props.children;
        h1.type.should.equal('h1');
    });

    it('should label save button "save" when not saving', () => {
        const {output} = setup(false);
        const submitButton = output.props.children[5];
        submitButton.props.value.should.equal('Save');
    });

    it('should label save button "saving..." when saving', () => {
        const {output} = setup(true);
        const submitButton = output.props.children[5];
        submitButton.props.value.should.equal('Saving...');
    });
});
