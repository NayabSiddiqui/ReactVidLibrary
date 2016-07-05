import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';

class CoursePage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.onClickSave = this.onClickSave.bind(this);
        this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    };

    onClickSave(course) {
        this.props.actions.createCourse(course);
    };

    courseRow(course, index) {
        return (<div key={index}>{course.title}</div>);
    };

    redirectToAddCoursePage(){
        browserHistory.push('/course');
    }

    render() {
        //The following is called destructuring
        const {courses} = this.props;
        return (
            <div>
                <h1>Courses</h1>
                <input type="submit"
                       value="Add Course"
                       className="btn btn-primary"
                       onClick={this.redirectToAddCoursePage}/>
                <CourseList courses={courses}/>
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