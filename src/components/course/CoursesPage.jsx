import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import AddCourseForm from './AddCourseForm';

class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onClickSave = this.onClickSave.bind(this);
    };

    onClickSave(course) {
        this.props.actions.createCourse(course);
    };

    courseRow(course, index) {
        return (<div key={index}>{course.title}</div>);
    };

    render() {
        return (
            <div>
                <h1>Courses</h1>
                {this.props.courses.map(this.courseRow)}
                <AddCourseForm onSubmit={this.onClickSave}/>
            </div>
        );
    };
}

CoursePage.propTypes = {
    actions: PropTypes.object.isRequired,
    courses: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        // The state here refers to the state of the store
        courses: state.courses
    };
}

// This dispatch is injected by connect()
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(courseActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);