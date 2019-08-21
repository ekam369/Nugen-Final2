import React, { Component } from 'react';
import './css/Submissions.css';

class Submissions extends Component {
    render() { 
        return ( 
                <div className="submission-cont">
                    <div className="upper-cont">
                        <div className="assi-tex">Total Submissions</div>
                        <div className="togg">
                            <div className="assi-tex">Pending Only</div>
                            <label className="switch">
                                <input type="checkbox" />
                                <span className="slider round"></span>
                            </label>
                        </div>
                    </div>
                    <div className="batches-cont">
                        <div className="batch m">1</div>
                        <div className="batch d">2</div>
                        <div className="batch e">3</div>
                    </div>
                    <div className="assign-tables">
                        <div className="head-tex">Name</div>
                        <div className="head-tex">Date</div>
                        <div className="head-tex">Credits</div>
                        <div className="head-tex">Submitted</div>
                    </div>
                    <div className="content">
                        <div className="cont-tex">Ekamjit Singh</div>
                        <div className="cont-tex">20-06-2019</div>
                        <div className="cont-tex">
                            <div className="sub success1">1.5</div>
                        </div>
                        <div className="cont-tex">
                            <i className="fas fa-check icos"></i>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cont-tex">Ekamjit Singh</div>
                        <div className="cont-tex">20-06-2019</div>
                        <div className="cont-tex">
                            <div className="sub success2">2.5</div>
                        </div>
                        <div className="cont-tex">
                            <i className="fas fa-check icos"></i>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cont-tex">Ekamjit Singh</div>
                        <div className="cont-tex">20-06-2019</div>
                        <div className="cont-tex">
                            <div className="sub success3">3.5</div>
                        </div>
                        <div className="cont-tex">
                            <i className="fas fa-check icos"></i>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cont-tex">Ekamjit Singh</div>
                        <div className="cont-tex">20-06-2019</div>
                        <div className="cont-tex">
                            <div className="sub success4">4.5</div>
                        </div>
                        <div className="cont-tex">
                            <i className="fas fa-check icos"></i>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cont-tex">Ekamjit Singh</div>
                        <div className="cont-tex">20-06-2019</div>
                        <div className="cont-tex">
                            <div className="sub success5">5</div>
                        </div>
                        <div className="cont-tex">
                            <i className="fas fa-check icos"></i>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cont-tex">Ekamjit Singh</div>
                        <div className="cont-tex">-</div>
                        <div className="cont-tex">
                            <div className="sub success1">-</div>
                        </div>
                        <div className="cont-tex">
                            <i className="fas fa-times icou"></i>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cont-tex">Ekamjit Singh</div>
                        <div className="cont-tex">-</div>
                        <div className="cont-tex">
                            <div className="sub success1">-</div>
                        </div>
                        <div className="cont-tex">
                            <i className="fas fa-times icou"></i>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cont-tex">Ekamjit Singh</div>
                        <div className="cont-tex">-</div>
                        <div className="cont-tex">
                            <div className="sub success1">-</div>
                        </div>
                        <div className="cont-tex">
                            <i className="fas fa-times icou"></i>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cont-tex">Ekamjit Singh</div>
                        <div className="cont-tex">20-06-2019</div>
                        <div className="cont-tex">
                            <div className="sub success4">4.5</div>
                        </div>
                        <div className="cont-tex">
                            <i className="fas fa-check icos"></i>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cont-tex">Ekamjit Singh</div>
                        <div className="cont-tex">20-06-2019</div>
                        <div className="cont-tex">
                            <div className="sub success4">4.5</div>
                        </div>
                        <div className="cont-tex">
                            <i className="fas fa-check icos"></i>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cont-tex">Ekamjit Singh</div>
                        <div className="cont-tex">20-06-2019</div>
                        <div className="cont-tex">
                            <div className="sub success4">4.5</div>
                        </div>
                        <div className="cont-tex">
                            <i className="fas fa-check icos"></i>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cont-tex">Ekamjit Singh</div>
                        <div className="cont-tex">20-06-2019</div>
                        <div className="cont-tex">
                            <div className="sub success4">4.5</div>
                        </div>
                        <div className="cont-tex">
                            <i className="fas fa-check icos"></i>
                        </div>
                    </div>
                    <div className="content">
                        <div className="cont-tex">Ekamjit Singh</div>
                        <div className="cont-tex">20-06-2019</div>
                        <div className="cont-tex">
                            <div className="sub success4">4.5</div>
                        </div>
                        <div className="cont-tex">
                            <i className="fas fa-check icos"></i>
                        </div>
                    </div>
                </div>
        );
    }
}
 
export default Submissions;