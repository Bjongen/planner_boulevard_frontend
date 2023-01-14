import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Pages/Home";
import AccountOverview from "./Pages/AccountOverview";
import NavBar from "./Component/Navbar";
import PlanningOverview from "./Pages/PlanningOverview";


function App() {
    return (
        <div>
            <NavBar/>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path={"/AccountOverview"} element={<AccountOverview/>}/>
                    <Route path={"/PlanningOverview"} element={<PlanningOverview/>}/>
                    <Route path={"*"} element={<h1>404: Not Found</h1>}/>
                </Routes>
            </BrowserRouter>
        </div>
    )
}
 
export default App;