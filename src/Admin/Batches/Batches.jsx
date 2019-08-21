import React, { Component } from 'react';
import './css/Batches.css';
import BatchInput from './BatchInput';
// import Sidebar2 from '../../Sidebar2/Sidebar2';
// import Head from '../../Head/Head';

class Batches extends Component {

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
                {/* <Head /> */}
                {/* <Sidebar2 /> */}
                <div className="batch-cont">
                    <div className="up-cont">
                        <div className="assi-tex">Batches</div>
                        <div className="bt-search">
                            <div onClick={this.showExpInp} className="bt-add">
                                <i className="fas fa-plus-circle"></i>&nbsp;
                                Add</div>
                            <input type="text" className="search" placeholder="search"/>
                        </div>
                    </div>
                    <div className="box"></div>
                </div>
                <BatchInput show={this.state.show} toggleState={this.updateParState}/>
            </div>  
        );
    }
}
 
export default Batches;