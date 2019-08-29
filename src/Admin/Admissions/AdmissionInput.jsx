import React, { Component } from 'react';
import AdmissionInpContainer from './AdmissionInpContainer';
import './css/AdmissionInput.css';

class AdmissionInput extends Component {

    state = {
        closed: false
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
            <div className="addm-inp-cont "
             style={
                this.props.show ? {display:"block"} : {display:"none"}}>
                
                <div className={!this.state.closed ? "exp-inp-box animOpen" : "exp-inp-box animClose"}>
                    <div className="exp-inp-cont">
                        <div className="cross-cont">
                            <div onClick={this.close} className="cross"></div>
                        </div>
                        <div className="inp-up-cont">
                            <div className="inp-up-tex">Student Details</div>
                        </div>
                        <AdmissionInpContainer makeClose={this.close}/>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default AdmissionInput;