import React, { Component } from 'react';
import { getAPICall } from '../../AxiosCalls';
import icon from './event.jpg';
import './Event.css';

class Event extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Events: [],
            loading: true
        };
    }
    componentDidMount() {
        this.getEvents();
    }

    async getEvents() {
        const response = await getAPICall('api/Events')
        const data = response.data
        this.setState({ Events: data, loading: false })
    }

    goDetails = async (e) => {
        console.log(e)
        const id = e.target.value
        try {
            const response = await getAPICall(`api/Events/${id}`);
            let data;
            if (response.status === 200 || 201) {
                data = response.data;
            }

            if (data != null) {
                this.props.history.push({
                    pathname: '/detailsEvent',
                    state: data
                });
            } else {
                alert('Something went wrong. Please Try again.');
            }

        } catch (e) {
            throw e;
        }
    }

     getComponents(list1) {
        return (<div id="eventContainer">
            {list1.map(event =>
                <div key={event.id} className="event border-primary">
                    <img src={icon} alt="Event Image" className="eventImage" />
                    <h4>{event.name}</h4>
                    <p id="eDetails text-light">{event.details}</p>

                    <div className="m-1">
                        <button className="btn btn-sm btn-success mr-2  ">Join</button>
                        <button onClick={this.goDetails} value={event.id} className="btn btn-sm btn-info ml-2 ">View Details</button>
                    </div>
                </div>
            )
            }
        </div>)

    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.getComponents(this.state.Events);

        return (
            <div>
                {contents}
            </div>
        );
    }
}

export default Event;