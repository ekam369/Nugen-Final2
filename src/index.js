import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import AAssignment from './Admin/Assignment/Assignment';
import Batches from './Admin/Batches/Batches';
import Expenditure from './Admin/Expenditure/Expenditure';
import Courses from './Admin/Courses/Course';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/assignment" component={AAssignment} />
            <Route path="/batches" component={Batches} />
            <Route path="/expenditure" component={Expenditure} />
            <Route path="/courses" component={Courses} />
        </Switch>
    </Router>
    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
