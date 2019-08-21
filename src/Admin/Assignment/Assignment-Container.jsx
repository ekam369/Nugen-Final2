import React, { Component } from 'react';
import './css/AssignmentContainer.css';
import AssignmentTableContainer from './Assignment-Table-Container';

class AssignmentContainer extends Component {

    render() { 
        return (  
            <div id="box" className="assign-cont">
                <div id="content" className="content-cont">
                    <div className="assi-tex">Assignment Status</div>
                    <div className="bt-search">
                        <div className="bt-add">
                            <i className="fas fa-plus-circle"></i>&nbsp;
                            Add
                        </div>
                        <input type="text" className="search" placeholder="search"/>
                    </div>
                    <AssignmentTableContainer />
                </div>
            </div>
        );
    }
}

export default AssignmentContainer;