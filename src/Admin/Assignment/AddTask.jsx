import React, { Component } from 'react';
import './css/AddTask.css';

class AddTask extends Component {

    render() { 
        return (  
            <>   
                <div className="task-cont">
                    <div className="task-boxx">
                        <div className="assi-tex">Let's Give Some Task...</div>
                        <div className="nav-cont">
                            <div className="circle-cont">
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                                <div className="circle"></div>
                            </div>
                            <div className="info-tex">Task Description</div>
                        </div>
                        {/* <div className="write-box">
                            <div className="write-tex">Let's first select the batch</div>
                            <div className="batch-cont">
                                <div className="batch m">M</div>
                                <div className="batch a">A</div>
                                <div className="batch e">E</div>
                            </div>
                        </div> */}
                        {/* <div className="write-box">
                            <div className="write-tex">So what is the task name?</div>
                            <input type="text"/>
                        </div> */}
                        <div className="write-box">
                            <div className="write-tex">There's any task description you want to give?</div>
                            <input type="text"/>
                        </div>
                        {/* <div className="write-box">
                            <div className="write-tex">Choose language from the given below</div>
                            <div className="lang-box">
                                <i className="fab fa-html5 icos i1"></i>
                                <i className="fab fa-css3-alt icos i2"></i>
                                <i className="fab fa-js icos i3"></i>
                                <i className="fab fa-cuttlefish icos i4"></i>
                                <i className="fab fa-python icos i5"></i>
                                <i className="fab fa-node-js icos i6"></i>
                                <i className="fab fa-react icos i7"></i>
                                <i className="fab fa-angular icos i8"></i>
                                <i className="fab fa-aws icos i9"></i>
                                <i className="fab fa-android icos i10"></i>
                                <i className="fab fa-vuejs icos i11"></i>
                                <i className="fab fa-sass icos i12"></i>
                                <i className="fab fa-adobe icos i13"></i>
                                

                            </div>
                        </div> */}
                        {/* <div className="write-box">
                            <div className="write-tex">Lastly, add gif or an image</div>
                            <div className="hint-box"><u>Add Hint</u></div>
                        </div> */}

                        <div className="btn-box">
                            <div className="submit-btn" >Next
                            <i class="far fa-arrow-alt-circle-right ico"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </>  
        );
    }
}
 
export default AddTask;