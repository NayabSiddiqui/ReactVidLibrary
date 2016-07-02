import React, {PropTypes} from 'react';

class AddCourseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            course: {title: ''}
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    };

    onTitleChange(event) {
        const course = this.state.course;
        course.title = event.target.value;
        this.setState({
            course: course
        });
    };

    onClickSave() {
        this.props.onSubmit(this.state.course);
        this.setState({
            course: {title: ''}
        });
    };

    render() {
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h2>Add Course</h2>
                </div>
                <div className="panel-body">
                    <input type="text"
                           onChange={this.onTitleChange}
                           value={this.state.course.title}/>
                    <input type="submit"
                           value="Save"
                           className="btn btn-primary"
                           onClick={this.onClickSave}/></div>
            </div>
        );
    };
}

AddCourseForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
};

export default AddCourseForm;