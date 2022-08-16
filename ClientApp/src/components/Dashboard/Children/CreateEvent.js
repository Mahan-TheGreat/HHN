import React, { Component } from 'react';
import { Codegen } from '../../../Codegen';
import { postAPICall } from '../../../AxiosCalls';


class EventsCreated extends Component {
    constructor(props) {
        super(props);
        this.state = {
            eName: "",
            eVenue: "",
            eGoal: 0,
            eType:"",
            eDetails: "",
            error: false,
            errorCause:0

        };
    }

    //handle imput change
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //handle form submit 
    handleSubmit = async(e) => {
        e.preventDefault()

        //generating unique code
        const x = Codegen(4)

        //getting type
        var type
        if (this.state.eType === "Educational Fundraiser") {
            type = 1
        } else if (this.state.eType === "Educational Awareness") {
            type = 2
        } else if (this.state.eType === "Medical Fundraiser") {
            type = 3
        } else if (this.state.eType === "Medical Awareness") {
            type = 4
        }else { type = 1 }

        const current = new Date();
        const time = current.toLocaleTimeString("en-US");

      
        let Event = {
            name: this.state.eName,
            code: x,
            details: this.state.eDetails,
            venue: this.state.eVenue,
            eventGoal: parseInt(this.state.eGoal),
            collected: 0,
            eventType:type,
            isActive: true,
            isVerified: false,
            createdTime:time

        }

        console.log(Event)


        const response = await postAPICall("api/Events", Event)

        if (response.data.status === 201) {
            alert("Event created successfully. Please wait for it to be verified.");
            console.log(response)
            //this.setState({
            //    id: response.data.id
            //})
        } else if (response.data.status === 500) {
            alert("Error! " + response.data.error)
            this.setState({
                error: true,
                errorCause: response.data.cause
            })
        }
    }

    render() {
        return (
            <div className='formContainer'>
                <form className='form' onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="eName">Event Name</label>
                        <input type="text"
                            className="form-control"
                            name="eName"
                            id="eName"
                            onChange={this.handleChange}
                            required
                            placeholder="Enter Event Title " />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eVenue">Event Venue</label>
                        <input type="text"
                            className="form-control"
                            name="eVenue"
                            id="eVenue"
                            onChange={this.handleChange}
                            required
                            placeholder="Enter a place for Event" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="eGoal">Event Goal</label>
                        <input type="number"
                            className="form-control"
                            name="eGoal"
                            id="eGoal"
                            onChange={this.handleChange}
                            required
                            placeholder="Total Goal " />
                        <small id="goalHelp2" className="form-text text-muted">Eg: Rs 20,000</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="eType">Event Type</label>
                        <select className="form-control" required name="eType" onChange={this.handleChange}>
                            <option >Educational Fundraiser</option>
                            <option>Educational Awareness</option>
                            <option>Medical Fundraiser</option>
                            <option>Medical Awareness</option>
                        </select>
                    </div>
          
                    <div className="form-group">
                        <label htmlFor="eDetails">Details</label>
                        <textarea className="form-control"
                            name="eDetails"
                            id="eDetails"
                            onChange={this.handleChange}
                            required
                            rows="3"></textarea>
                        <small id="cdetailsHelp" className="form-text text-muted">Provide proper description and details for better performance of the event.</small>
                    </div>
                    <button className="btn btn-primary" type="submit">Create</button>
                </form>
            </div>

        );
    }
}

export default EventsCreated;