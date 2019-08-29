import React, { Component } from 'react';
import './css/ExpenditureTable.css';
import Helper from '../../Common/Helper';
class ExpenditureTable extends Component{

    constructor() {
        super();

        this.state = {
            expenditures : []
        }
    }

    componentWillMount() {
        Helper('expenditures', 'GET', '')
        .then((res) => {
            this.setState({
                expenditures: res
            })
        })
    }

    render(){
        return(
            <div>
                <table className="edit-table">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Paid By</th>
                            <th>Description</th>
                            <th>Mode Of Payment</th>
                            <th>From Account</th>
                            <th>Amount</th>
                            <th>Update</th>
                        </tr>
                        {
                            this.state.expenditures.map((v, i) => {
                                return(
                                    <tr key={i}>
                                        <td>{v.id}</td>
                                        <td>{v.paid_by}</td>
                                        <td>{v.description}</td>
                                        <td>{v.mode_of_payment}</td>
                                        <td>{v.from_account_of}</td>
                                        <td>{v.amount}</td>
                                        <td><i onClick={() => this.props.toggleState(v)} className="fas fa-edit"> </i></td>
                                    </tr>    
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default ExpenditureTable;