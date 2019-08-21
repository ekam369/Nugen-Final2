import React, { Component } from 'react';
import './css/CourseInput.css';
import CourseInpContainer from './CourseInpContainer';

class CourseInput extends Component {
    
    state = {
        closed: false,
    }

    close = () => {
        this.changeState('closed', true);
        setTimeout( () => {
            this.props.toggleState();
            this.setState({
                closed: false
            })
        }, 590)
    }

    changeState(selState, val) {
        this.setState({
            [selState]: val
        })
    }

    render() { 
        return (  
            <div className="course-inp-cont "
             style={
                this.props.show ? {display:"block"} : {display:"none"}}>
                
                <div className={!this.state.closed ? "exp-inp-box animOpen" : "exp-inp-box animClose"}>
                    <div className="exp-inp-cont">
                        <div className="cross-cont">
                            <div onClick={this.close} className="cross"></div>
                        </div>
                        <div className="inp-up-cont">
                            <div className="inp-up-tex">ADD NEW COURSE</div>
                        </div>
                        <CourseInpContainer makeClose={this.close}/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default CourseInput;