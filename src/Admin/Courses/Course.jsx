import React, { Component } from 'react';
import CourseInput from './CourseInput';
import './css/Course.css';
import Sidebar2 from '../../Sidebar2/Sidebar2';
import Head from '../../Head/Head';

class Course extends Component {
    
    state = {
        show: false
    }

    showExpInp = () => {
        this.setState( {
            show: true
        })
    }

    updateParState = () => {
        this.setState({
            show: false
        })
    }

    render() { 
        return (  
            <div>
                <Head />
                <Sidebar2 />
                <div className="course-cont">
                    <div className="up-cont">
                        <div className="assi-tex">Courses</div>
                        <div className="bt-search">
                            <div onClick={this.showExpInp} className="bt-add">
                                <i className="fas fa-plus-circle"></i>&nbsp;
                                Add</div>
                            <input type="text" className="search" placeholder="search"/>
                        </div>
                    </div>
                    <div className="box"></div>
                </div>
                <CourseInput show={this.state.show} toggleState={this.updateParState}/>
            </div>  
        );
    }
}
 
export default Course;