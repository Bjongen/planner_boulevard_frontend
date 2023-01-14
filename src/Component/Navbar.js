import React, {Component} from 'react';

class NavBar extends Component {

    state = {
        isOpen: false,
        RollType: "Admin"
    };

    render() {

        return (
            <nav className="sticky-lg-top">
                <div className="nav-center col-lg-8">


                    <ul className={this.state.isOpen ? "nav-links nav-header" : "nav-links"}>
                        <li>
                            <div className="col-lg-3 nav_home">
                                <a href="/">Home</a>
                            </div>
                        </li>
                        <li>
                            <div className="col-lg-3 nav_accountOverview">
                                <a href="/AccountOverview">Accounts</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default NavBar;