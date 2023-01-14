import {Component} from 'react';

class Account extends Component {
    redirectToPlanning()
    {
        window.location.href = `/PlanningOverview?accountId=${this.props.account.accountId}`;
    }
    
    componentDiv() {
        return (
            <div>
                <table className={"table_border__Account"}>
                    <tr onClick={()=> this.redirectToPlanning()}>
                        <td>{this.props.account.name}</td>
                        <td>{this.props.account.employeeCode}</td>
                    </tr>
                </table>
            </div>
        )
    }
    render() {
        return (
            <div>
                {this.componentDiv()}
            </div>
        );
    }
}

export default Account;