import {Component} from 'react';
import Account from "../Component/Account";
import {v4 as uuidv4} from 'uuid';

class AccountOverview extends Component {
    state = {
        accounts: [
            {
                accountId: 0,
                name: "a",
                employeeCode: "a"
            }
            ]
    }
    
    componentDidMount() {
        fetch('https://localhost:7062/AccountsGet').then(async (response) => {
            let json = await response.json();
            this.setState({accounts: json});
        }).catch((error) => {
            alert(error);
        });
    }
    
    renderAccountList() {
        return (
            <div>
                {this.state.accounts.map((account) => {
                    return (<div key={uuidv4()}>
                            <Account key={uuidv4()} account={account}/>
                        </div>
                    )}
                )}
            </div>
        )
    }
    
    render() {
        return (
            <div>
                <div className={"table_border__Account"}>
                    <th>Name</th>
                    <th>EmployeeCode</th>
                </div>
                {this.renderAccountList()}
            </div>
        );
    }
}

export default AccountOverview;