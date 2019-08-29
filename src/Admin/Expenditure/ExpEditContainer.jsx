import React, { Component } from 'react';
import Helper from '../../Common/Helper';
import './css/ExpenditureEditInfo.css';

class ExpenditureEditInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                id: this.props.user.id,
                description: this.props.user.description,
                from_account_of: this.props.user.from_account_of,
                mode_of_payment: this.props.user.mode_of_payment,
                paid_by: this.props.user.paid_by,
                amount: this.props.user.amount
            }
        };
    }
    componentWillReceiveProps(props) {
        this.setState({
            user: props.user
        });
    }

    handleInput = (e) => {
        let user = this.state.user;
        user[e.target.name]= e.target.value 
        this.setState({
            user
        })
    }

    handleForm = (e) => {
        e.preventDefault();
    }

    updateExpenditures = () => {
        Helper(`expenditures/${this.state.user.id}`, 'PUT', this.state.user)
            .then((res) => {
                if (res.msg === 1) {
                    console.log("Expenditure updated successfully");
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
                            <input onBlur={this.handleInput} onChange={this.handleInput} type="text" name="paid_by" defaultValue={this.state.user.paid_by} />
                        </div>
                        <div className="detail-box">
                            <label>Description</label>
                            <input onBlur={this.handleInput} onChange={this.handleInput} type="text" name="description"defaultValue={this.state.user.description}/>
                        </div>
                        <div className="detail-box">
                            <label>Mode Of Payment</label>
                            <select onBlur={this.handleInput} onChange={this.handleInput} name="mode_of_payment" id="mode" defaultValue={this.state.user.mode_of_payment}>
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
                            <input onBlur={this.handleInput} onChange={this.handleInput} type="text" name="from_account_of" defaultValue={this.state.user.from_account_of}/>
                        </div>
                        <div className="detail-box">
                            <label>Amount</label>
                            <input onBlur={this.handleInput} onChange={this.handleInput} type="number" name="amount" value={this.state.user.amount}/>
                        </div>
                        <button onClick={this.updateExpenditures} className="inp-submit-btn" type="submit">Update Details</button>
                    </form>
                </div>
            </div>

        );
    }
}

export default ExpenditureEditInfo;