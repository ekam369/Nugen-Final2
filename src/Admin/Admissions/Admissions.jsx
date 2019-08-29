import React, { Component } from 'react';
import './css/Admissions.css';
import AdmissionInput from './AdmissionInput';
import Sidebar2 from '../../Sidebar2/Sidebar2';
import Head from '../../Head/Head';
import AdmissionsTable from './AdmissionsTable';

class Admissions extends Component {

    state = {
        showInp: false,
        showEdit: false,
        user: {
            student_name: '',
            email: '',
            mobile_number: '',
            school_college: '',
            stream: '',
            father_mother_name: '',
            parent_mobile_number: '',
            permanent_address: '',
            batch_id: 0,
            total_fee: '',
            advance_payment: '',
            total_installments: 0,
            referred_by: '',
            dob: '',
            batch_name: ''
        }
    }

    showExpInp = () => {
        this.setState( {
            showInp: true
        })
    }

    showEditInp = (user) => {
        this.setState({
            showEdit: true,
            user: user
        })
    }

    updateParState = () => {
        this.setState({
            showInp: false
        })
    }

    updateEditState = () => {
        console.log("Clicked")
        this.setState({
            showEdit: false
        })
    }

    render() { 
        return (  
            <div>
                <Head />
                <Sidebar2 />
                <div className="addm-cont">
                    <div className="up-cont">
                        <div className="assi-tex">Admissions</div>
                        <div className="bt-search">
                            <div onClick={this.showExpInp} className="bt-add">
                                <i className="fas fa-plus-circle"></i>&nbsp;
                                Add</div>
                            <input type="text" className="search" placeholder="search"/>
                        </div>  
                    </div>
                    <div className="box">
                        <AdmissionsTable toggleState={this.showEditInp}/>
                    </div>
                </div>
                <AdmissionInput show={this.state.showInp} toggleState={this.updateParState}/>
            </div>  
        );
    }
}
 
export default Admissions;