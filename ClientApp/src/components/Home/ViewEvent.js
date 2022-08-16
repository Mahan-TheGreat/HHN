import React, { Component } from 'react';
import { getAPICall } from '../../AxiosCalls';
import './viewCampaign.css';
import icon from '../Events/event.jpg'
import { googleCall } from '../NewFolder/SocialMedia';

class viewEvent extends Component {
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

    //go to details page
    goToDetails = async (e) => {
        console.log(e)
        const id = e.target.getAttribute('data-resource')
        try {
            const response = await getAPICall(`api/Events/${id}`);
            let data;
            if (response.status === 200 || 201) {
                data = response.data;
            }
            console.log(data)
            if (data != null) {
                this.props.history.push({
                    pathname: '/EventDetails',
                    state: data
                });
            } else {
                alert('Something went wrong. Please Try again.');
            }

        } catch (e) {
            throw e;
        }
    }


    async getEvents() {
        const response = await getAPICall('api/Events')
        const data = response.data
        this.setState({ Events: data, loading: false })
    }

    static getComponents(list1) {
        return (<div id="eventHomeContainer">
            {list1.map(event =>
                <div key={event.id} id="eventHome">
                    <img src={icon} alt="imageEvent" id="eventImageHome" />
                    <h4>{event.name}</h4>
                    <p id="eDetailsHome">{event.details}</p>
                    <p className="eTextHome"> Goal : {event.fundGoal}</p>
                    <p className="eTextHome">Collected : {event.collected}</p>
                    <div className="m-1">
                        <button className="btn btn-sm btn-success m-1  ">Join</button>
                        <button onClick={this.goToDetails} data-resource={event.id } className="btn btn-sm btn-info ">View Details</button>
                    </div>
                </div>
            )
            }
        </div>)

    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : viewEvent.getComponents(this.state.Events);

        return (
            <div>
                {contents}
            </div>
        );
    }
}

export default viewEvent;