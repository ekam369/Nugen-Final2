import React, { Component } from 'react';
import Helper from '../../Common/Helper';
import './css/AdmissionInpContainer.css';

class ExpInpContainer extends Component {

    state = {
        batch_id: 2
    }

    handleForm = (e) => {
        e.preventDefault(); 
    }

    handleInput = (e) => {
        this.setState({ [e.target.name]: e.target.value }, _ => { console.log(this.state); })
    }
    
    submit =() =>{
        Helper('admissions',"POST",this.state) 
        .then((res) => {
            if (res.msg === 1){
                console.log("Hello")
            }
        })
    }

    render() { 
        return (  
                <div className="inp-details-cont">
                    <div className="inp-details-box">
                    <form onSubmit={this.handleForm}>
                    <div className="GRID">
                        <div className="D1">STUDENT NAME</div>
                        <div className="D2">DATE OF BIRTH</div>
                        <div className="D3">EMAIL ADDRESS</div>
                        <div className="D4"><input onBlur={this.handleInput} name="student_name" type="text" placeholder="Student Name" required /></div>
                        <div className="D5"><input onChange={this.handleInput} name="dob" type="text" id="date" placeholder="dd/mm/yyyy" required /></div>
                        <div className="D6"><input onChange={this.handleInput} name="email" type="Email" required placeholder="Email" /></div>
                        <div className="D1">MOBILE NO.</div>
                        <div className="D2">SCHOOL/COLLEGE</div>
                        <div className="D3">STREAM</div>
                        <div className="D4"><input onChange={this.handleInput} name="mobile_number" type="number" required placeholder="Mobile No." /></div>
                        <div className="D5"><input onChange={this.handleInput} name="school_college" type="text" required placeholder="School/College" /></div>
                        <div className="D6"><input onChange={this.handleInput} name="stream" type="text" required placeholder="Stream" /></div>
                        <div className="D7">PERMANENT ADDRESS</div>
                        <div className="D8"><input onChange={this.handleInput} name="permanent_address" type="text" required placeholder="Permanent Address" /></div>
                        <div className="D9">FATHER'S NAME</div>
                        <div className="D10">PARENT'S MOBILE NO.</div>
                        <div className="D11"><input onChange={this.handleInput} name="father_mother_name" type="text" required placeholder="Father/Mother's Name" /></div>
                        <div className="D12"><input onChange={this.handleInput} name="parent_mobile_number" type="number" required placeholder="Parent's Mobile Number" /></div>
                        <div className="D1">SELECT BATCH</div>
                        <div className="D2">TOTAL FEES</div>
                        <div className="D3">ADV. PAYMENT</div>
                        <div className="D4"><input onChange={this.handleInput} name="batch_id" type="number" required placeholder="Enter Batch Name" /></div>
                        <div className="D5"><input onChange={this.handleInput} name="total_fee" type="number" required placeholder="Total Fees" /></div>
                        <div className="D6"><input onChange={this.handleInput} name="advance_payment" type="number" required placeholder="Advance Payments" /></div>
                        <div className="D9">TOTAL INSTALLMENTS</div>
                        <div className="D10">REFFERED BY</div>
                        <div className="D11"><input onChange={this.handleInput} name="total_installments" type="number" required placeholder="No of Installments" /></div>
                        <div className="D12"><input onChange={this.handleInput} name="referred_by" type="text" required placeholder="Reffered By" /></div>
                        <div className="D13"><button className="addm-inp-submit-btn" onClick={this.submit}>Submit</button></div>
                    </div>
                </form>
                </div>
            </div>
            
        );
    }
}
 
export default ExpInpContainer;