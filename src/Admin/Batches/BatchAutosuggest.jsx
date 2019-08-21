import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

const course_name = [
    {
        name: 'Ruby On Rails'
    },
    {
        name: 'React'
    },
    {
        name: 'Angular'
    }
]

const getSuggestions = value => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;

    return inputLength === 0 ? [] : course_name.filter( course => 
        course.name.toLowerCase().slice(0, inputLength) === inputValue
    );
}

const getSuggestionValue = suggestion => suggestion.name;

const renderSuggestion = suggestion => (
    <div>
      {suggestion.name}
    </div>
);

class BatchAutosuggest extends Component {
    constructor() {
        super();

        this.setState({
            value: '',
            suggestions: []
        })
    }

    onChange = (e, { newValue }) => {
        this.setState({
            value: newValue
        })
    }

    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: getSuggestions(value)
        })
    }

    onSuggestionsClearRequested = () => {
        this.setState({
          suggestions: []
        });
    };
    
    render() { 

        const { value, suggestions } = this.state;

        const inputProps = {
            placeholder: 'Course Name',
            value,
            onChange: this.onChange
        }

        return (  
            <Autosuggest 
                suggestions = {suggestions}
                onSuggestionsFetchRequested = {this.onSuggestionsFetchRequested}
                onSuggestionsClearRequested = {this.onSuggestionsClearRequested}
                getSuggestionValue = {getSuggestionValue}
                renderSuggestion = {renderSuggestion}
                inputProps = { inputProps }
            />
        );
    }
}
 
export default BatchAutosuggest;