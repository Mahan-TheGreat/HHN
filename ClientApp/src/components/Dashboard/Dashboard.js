import React, { Component } from 'react';
import SessionUser from '../Authentication/SessionUser';
import Campaigns from './Children/CreateCampaign';
import CreateTeam from './Children/CreateTeam';
import Events from './Children/CreateEvent';
import JoinTeam from './Children/JoinTeam';

export class Dashboard extends Component {
    static displayName = Dashboard.name;

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            status: false,
            view: "0",
            active:''
        };
        
    }

    //For display in the dashboard

    //0 --> Main Dashboard
    //1 -- > Campaigns Created
    //2 -- > Events Created
    //3 -- > Join Team 
    //4 -- > Create Team

    //Function for authentication
    checkAuth = () => {
        if (SessionUser.getStatus() === 'false' || SessionUser.getStatus() === undefined) {
            alert("You must be logged in to view the dashboard.");
            this.props.history.push('/authentication')
        }
    }

    //for navigation active button
    fillNav = () => {
        let y = document.getElementsByClassName('active')
        if (y.length > 0) {

            for (var i = 0; i < y.length; i++) {
                y[i].className = y[i].className.replace("active", "")
            }
        }
        if (this.state.active != '') {
          
            let x = document.getElementById(`${this.state.active}`)
            x.classList.add("active")
        }
    }

    //Check for authentication
    componentDidMount() {
        this.checkAuth()
    }

    //for navigation active button
    componentDidUpdate() {
        
        this.fillNav()

    }

    //Logout Button
    handleLogout = () => {

        SessionUser.setUserName("");
        SessionUser.setToken("");
        SessionUser.removeStatus();
        this.setState({ status: false });
        this.props.history.push('/authentication');
    }

    changeState = (a,b) => {
        this.setState({
            view: a,
            active:b
        })
    }

    // Function to change views on Click
    handleClick(e) {
        let a = e.target.name;
        let b = e.target.id;
        a = a.toString();
        b = b.toString();
        this.changeState(a,b)
    }

    //head Container
    headContainer = () => {
        let backButton;
        if (this.state.view !== "0") {
            backButton = <button name="0" onClick={this.handleClick}
                className="btn btn-sm btn-secondary  dashButton m-1">Go Back</button>
        }
        const display = <div id="dashboard">
            <div className="text-center d-flex  bordered justify-content-around">
                <div> {backButton} </div>
                <div>
                    <button onClick={this.handleClick}
                        name="1"
                        id="createCampaign"
                        className="btn btn-sm btn-info dashButton navButton m-1">Create Campaign</button>
                    <button onClick={this.handleClick}
                        name="2"
                        id="createEvent"
                        className="btn btn-sm btn-info dashButton navButton m-1">Create Event</button>
                    <button onClick={this.handleClick}
                        name="3"
                        id="joinTeam"
                        className="btn  btn-sm btn-info dashButton navButton m-1">Join Team </button>
                    <button onClick={this.handleClick}
                        name="4"
                        id="createTeam"
                        className="btn btn-sm btn-info dashButton navButton m-1">Create Team</button>
                </div>
                <div>
                    <button className="btn btn-sm btn-danger dashButton m-1 align-self-right" onClick={this.handleLogout}>Logout</button>
                 </div>
            </div>
        </div>

        return display;
    }

    //main Container
    maindisplayContainer = () => {
        let display;
        if (this.state.view === "1") {
            display = <Campaigns/>
        } else if (this.state.view === "2") {
            display = <Events />
        } else if (this.state.view === "3") {
            display = <JoinTeam />
        } else if (this.state.view === "4") {
            display = <CreateTeam />
        }
        return display;
    }

    //main  Render
    render() {
        const head = this.headContainer()
        const display = this.maindisplayContainer()
        
        return (
            <>

                {head}
                {display}

            </>
        );
    }
}
