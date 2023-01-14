import {Component} from "react";
import Planning from "../Component/Planning";
import {v4 as uuidv4} from "uuid";
class PlanningOverview extends Component {
    state = {
        accountId: 0,
        plannings: [
            {
                week: 1,
                weekday: "",
                date: "",
                time: "",
            }
        ]
    }

    renderPlanningList() {
        return (
            <div>
                {this.state.plannings.map((planning) => {
                    return (<div key={uuidv4()}>
                            <Planning key={uuidv4()} planning={planning}/>
                        </div>
                    )}
                )}
            </div>
        )
    }
    
    componentDidMount() {
        let urlParams = new URLSearchParams(window.location.search);
        let accountId = urlParams.get("accountId");
        let weekNumber = urlParams.get("week");
        this.setState({accountId: urlParams.get("accountId")});
        fetch(`https://localhost:7062/PlanningsGet?accountId=${accountId}&weekNumber=${weekNumber}`).then(async (response) => {
            let json = await response.json();
            this.setState({plannings: json});
            console.log(JSON.stringify(this.state))
        }).catch((error) => {
            alert(error);
        });
    }
    
    render() {
        return (
            <div>
                {console.log(JSON.stringify(this.state))}
                <div align={"center"}>
                Week: <select>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
            </select>
            </div>
                <div className={"table_border__planning"}>
                    <th>Day</th>
                    <th>Date</th>
                    <th>Time</th>
                </div>
                {this.renderPlanningList()}
            </div>
        );
    }
} 
export default PlanningOverview;