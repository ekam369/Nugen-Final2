import React, { Component } from 'react';
import './css/AdmissionsTable.css';
import Helper from '../../Common/Helper';

class AdmissionsTable extends Component{

    constructor() {
        super();

        this.state = {
            admissions : []
        }
    }

    componentWillMount() {
        Helper('admissions', 'GET', '')
        .then((res) => {
            console.log(res);
            this.setState({
                admissions: res.admissions
            })
        })
    }

    render(){
        console.log(this.state.admissions);
        return(
            <div>
                <table className="edit-table">
                    <tbody>
                        <tr>
                            <th>Student Name:</th>
                            <th>Date Of Birth</th>
                            <th>Email Adress</th>
                            <th>Mobile Number</th>
                            <th>School/College</th>
                            <th>Stream</th>
                            <th>Permanent Address</th>
                            <th>Father/Mother's Name</th>
                            <th>Parent Mobile Number</th>
                            <th>Batch Name</th>
                            <th>Total Fee</th>
                            <th>Advance Payment</th>
                            <th>Total Installments</th>
                            <th>Referred By</th>
                            <th>Update</th>
                        </tr>
                        {
                            this.state.admissions.map((v, i) => {
                                var stu_details = Object.keys(v).map((key) => {
                                    return [v[key]]
                                })
                                console.log(stu_details);
                                return(
                                    <tr>
                                        {
                                            stu_details.map((v, i) => {
                                                console.log(v);
                                                return(
                                                    <td>
                                                        {v}
                                                    </td>
                                                )
                                            })
                                        }
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
export default AdmissionsTable;