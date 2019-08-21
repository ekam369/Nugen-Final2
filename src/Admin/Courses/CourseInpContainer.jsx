import React, { Component } from 'react';
import Helper from '../../Common/Helper';

class CourseInpContainer extends Component {

    handleSubmit = (e) => {
        e.preventDefault()
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    AddCourse = () => {
        Helper('courses', 'POST', this.state)
        .then((res) => {
            if(res.msg === 1) {
                console.log("Course added Successfully");
            }
        })
        .catch((err) => {
            console.log(err+" Error ")
        })
    }
    
    render() { 
        return ( 
            <div className="inp-details-cont">
                    <div className="inp-details-box">
                    <form onSubmit={this.handleSubmit}>
                        <div className="detail-box">
                            <label>COURSE NAME</label>
                            <input onChange={this.handleInput} type="text" name="course_name" placeholder="Course Name" required/>
                        </div>
                        <div className="detail-box">
                            <label>DESCRIPTION</label>
                            <input onChange={this.handleInput} type="text" name="course_content" placeholder="Description" required/>
                        </div>
                        <button onClick={this.AddCourse} className="inp-submit-btn" type="submit">Add Details</button>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default CourseInpContainer;