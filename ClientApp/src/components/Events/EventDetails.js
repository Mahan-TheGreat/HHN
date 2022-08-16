import React, { Component } from 'react';
import './Event.css';
import icon from './event.jpg';

class EventDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {

            loading: true
        };
    }

    mainComponent = () => {
        const event = this.props.location.state;
        console.log(event);
        console.log(this.props.location.state);
        let display;
        display = <div key={event.id} className="event border-primary">
            <img src={icon} alt="Event Image" className="eventImage" />
            <h4>{event.name}</h4>
            <p id="eDetails">{event.details}</p>
            <p className="eText"> Goal : {event.eventGoal}</p>
            <p className="eText">Collected : {event.collected}</p>
            <div className="m-1">
                <button className="btn btn-sm btn-primary m-1  ">Donate</button>
            </div>
        </div>

        return display;
    }


    render() {
        const display = this.mainComponent()
        return (
            <>
                <button className="btn btn-outline-info m-2" onClick={() => this.props.history.goBack()} >Back</button>
                {display}
            </>
        );
    }
}

export default EventDetails;