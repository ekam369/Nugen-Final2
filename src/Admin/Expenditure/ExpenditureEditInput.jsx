import React, { Component } from 'react';
import './css/ExpenditureInput.css';
import ExpEditContainer from './ExpEditContainer';

class ExpenditureInput extends Component {

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
        // console.log(this.props.user);
        return (  
            <div className="expend-inp-cont "
             style={
                this.props.show ? {display:"block"} : {display:"none"}}
                // false ? {display:"block"} : {display:"none"}}
                >
                
                <div className={!this.state.closed ? "exp-inp-box animOpen" : "exp-inp-box animClose"}>
                    <div className="exp-inp-cont">
                        <div className="cross-cont">
                            <div onClick={this.props.toggleState} className="cross"></div>
                        </div>
                        <div className="inp-up-cont">
                            <div className="inp-up-tex">Edit Expenditure</div>
                        </div>
                        <ExpEditContainer 
                            makeClose={this.close} 
                            user={this.props.user}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
 
export default ExpenditureInput;