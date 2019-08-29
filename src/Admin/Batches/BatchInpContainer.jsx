import React, { Component } from 'react';
import Helper from '../../Common/Helper';
import Autosuggest from 'react-autosuggest';
import './css/BatchInpContainer.css';

class BatchInpcontainer extends Component {

    constructor() {
        super();

        this.state = {
            value: '',
            suggestions: [],
            makeArr: [],
            course_ids: []
        }
    }

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0 ? [] : this.state.allCourses.filter(course =>
            course.course_name.toLowerCase().includes(value)
        );
    }
    
    getSuggestionValue = (suggestion) => 
    {
        // console.log(suggestion)
        let course_id = this.state.course_ids;
        course_id.push(suggestion.id) 
        this.setState({
            course_ids: course_id
        })
        return(
            suggestion.course_name
        )
    }
    
    onSuggestionSelected = (e, { suggestion }) => {
        let arr = this.state.makeArr;
        arr.push(suggestion);
        this.setState({
            makeArr: arr
        })
        // console.log(suggestion);
    }

    renderSuggestion = suggestion => (
        <option >
            {suggestion.course_name}
        </option>
    );

    componentDidMount(){
        this.courses();
    }

    courses = () =>{
        Helper('courses', 'GET', '')
        .then((res)=>{
            
            this.setState({
                allCourses:res
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    } 

    handleInput = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })    
    }

    addBatch = () => {
        Helper('batches', 'POST', this.state)
        .then((res) => {
            console.log(res)
            if (res.msg === 1) {
                console.log("successful");
            }
        })
        .catch((err) => {
            console.log(err + "There is an error");
        })
    }

/******************************** */

    onChange = (e, { newValue }) => {
        this.setState({
            value: newValue
        })
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        })
        // console.log(this.state.value);
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            value: '',
            suggestions: []
        });
    };

    removeElements = (index) => {
        let arr = this.state.course_ids;
        let arr2 = this.state.makeArr;
        arr.splice(index, 1);
        arr2.splice(index, 1);
        this.setState({
            course_ids: arr,
            makeArr: arr2
        })
    }

    render() {
        console.log(this.state);
        let value = this.state.value;
        let suggestions = this.state.suggestions;
        const inputProps = {
            placeholder: 'Course Name',
            value,
            onChange: this.onChange,
            name: "courses",
            className: "suggest"
        }

        return (
            <div className="inp-details-cont">
                <div className="inp-details-box">
                    <form>
                        <div className="detail-box">
                            <label>TOTAL STUDENTS</label>
                            <input onChange={this.handleInput} type="number" name="total_students" placeholder="Total Students" required />
                        </div>
                        <div className="detail-box">
                            <label>BATCH NAME</label>
                            <input onChange={this.handleInput} type="text" name="batch_name" placeholder="Batch Name" required />
                        </div>
                        <div className="detail-box">
                            <label>COURSE NAME</label>
                            <Autosuggest className="suggest"
                                suggestions = {suggestions}
                                onSuggestionsFetchRequested = {this.onSuggestionsFetchRequested}
                                onSuggestionSelected = {this.onSuggestionSelected}
                                onSuggestionsClearRequested = {this.onSuggestionsClearRequested}
                                getSuggestionValue = {this.getSuggestionValue}
                                renderSuggestion = {this.renderSuggestion}
                                inputProps = { inputProps }
                            />
                        </div>
                        <div className="suggest-boxes-cont">
                            {
                                this.state.makeArr.map((v, i) => {
                                    return(
                                        <div className="suggest-box-cont">
                                            <div onClick={() => this.removeElements(i)} className="close-cont"></div>
                                            <div key={i} className="suggest-box">{v.course_name}</div>
                                        </div>
                                    )
                                })
                            }                            
                        </div>
                        <div className="detail-box">
                            <label>BATCH TIMING</label>
                            <input onChange={this.handleInput} type="text" name="batch_timings" placeholder="Batch Timing" required />
                        </div>
                        <button onClick={this.addBatch} className="inp-submit-btn" type="submit">Add Details</button>
                    </form>
                </div>
            </div>

            // <table>
            //     {
            //         <tr>
            //         <td>v.course_name</td>
                
            //     </tr>

            //     }
            // </table>

        );
    }

}

export default BatchInpcontainer;