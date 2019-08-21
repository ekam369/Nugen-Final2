import React, { Component } from 'react';
import Helper from '../../Common/Helper';
import Autosuggest from 'react-autosuggest';

class BatchInpcontainer extends Component {

    constructor() {
        super();

        this.state = {
            value: '',
            course_ids: [1],
            suggestions: []
        }
    }

    getSuggestions = value => {
        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;
    
        return inputLength === 0 ? [] : this.state.allCourses.filter(course =>
            course.course_name.toLowerCase().includes(value)
        );
    }
    
    getSuggestionValue = suggestion => suggestion.course_name;
    
    renderSuggestion = suggestion => (
        <div>
            {suggestion.course_name}
        </div>
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
        value: newValue,
        // [e.target.name]: e.target.newValue
    })
}

onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
        suggestions: this.getSuggestions(value)
    })
}

onSuggestionsClearRequested = () => {
    this.setState({
        value: '',
        suggestions: []
    });
};


prev = (e) => {
    e.preventDefault();
}


render() {
    console.log(this.state.value)
    let value = this.state.value;
    let suggestions = this.state.suggestions;
    // console.log(this.state);
    const inputProps = {
        placeholder: 'Course Name',
        value,
        onChange: this.onChange,
        name: "courses"
    }

    return (
        <div className="inp-details-cont">
            <div className="inp-details-box">
                <form onSubmit={this.prev}>
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
                        <Autosuggest 
                                suggestions = {suggestions}
                                onSuggestionsFetchRequested = {this.onSuggestionsFetchRequested}
                                // onSuggestionsClearRequested = {this.onSuggestionsClearRequested}
                                getSuggestionValue = {this.getSuggestionValue}
                                renderSuggestion = {this.renderSuggestion}
                                inputProps = { inputProps }
                            />
                        
                    </div>
                    <div className="detail-box">
                        <label>BATCH TIMING</label>
                        <input onChange={this.handleInput} type="text" name="batch_timings" placeholder="Batch Timing" required />
                    </div>
                    <button onClick={this.addBatch} className="inp-submit-btn" type="submit">Add Details</button>
                </form>
            </div>
        </div>

    );
}

}

export default BatchInpcontainer;