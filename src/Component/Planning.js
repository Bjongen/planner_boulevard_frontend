import {Component} from "react";

class Planning extends Component {
    componentDiv() {
        return (

            <div>
                    <table className={"table_border__planning"}>
                        <tr>
                            <td>{this.props.planning.weekday}</td>
                            <td>{this.props.planning.date.split('T')[0]}</td>
                            <td>{this.props.planning.date.substring(11, 16)}</td>
                        </tr>
                    </table>
            </div>
        );
    }

    render() {
        return (
            <div>
                {this.componentDiv()}
            </div>
        );
    }
}

export default Planning;