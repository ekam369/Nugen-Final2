import React, { Component } from 'react';
import Helper from '../../Common/Helper';
import './css/ExpenditureInput.css';

class ExpInpContainer extends Component {

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleForm = (e) => {
        e.preventDefault();
    }

    addExpenditures = () => {
        Helper('expenditures', 'POST', this.state)
        .then((res) => {
            if(res.msg === 1){
                console.log("Expenditure added successfully");
            }
        })
        .catch((err) => {
            console.log(err + " Error")
        })
    }

    render() { 
        return (  
                <div className="inp-details-cont">
                    <div className="inp-details-box">
                    <form onSubmit={this.handleForm}>
                        <div className="detail-box">
                            <label>PAID BY</label>
                            <input onChange={this.handleInput} type="text" name="paid_by" placeholder="Paid By" required/>
                        </div>
                        <div className="detail-box">
                            <label>Description</label>
                            <input onChange={this.handleInput} type="text" name="description" placeholder="Description" required/>
                        </div>
                        <div className="detail-box">
                            <label>Mode Of Payment</label>
                                <select onChange={this.handleInput} name="mode_of_payment" id="mode" required>
                                <option value="">Mode Of Payment</option>
                                <option value="cash">Cash</option>
                                <option value="cheque">Cheque</option>
                                <option value="paytm">Paytm</option>
                                <option value="googlepay">Google Pay</option>
                                <option value="phonepe">Phone Pe</option>
                            </select>
                        </div>
                        <div className="detail-box">
                            <label>From Account Of</label>
                            <input onChange={this.handleInput} type="text" name="from_account_of" placeholder="From Account of" required/>
                        </div>
                        <div className="detail-box">
                            <label>Amount</label>
                            <input onChange={this.handleInput} type="number" name="amount" placeholder="Amount" required/>
                        </div>
                        <button onClick={this.addExpenditures} className="inp-submit-btn" type="submit">Add Details</button>
                    </form>
                </div>
            </div>
            
        );
    }
}
 
export default ExpInpContainer;