import React, { Component } from 'react';
import { postAPICall } from '../../../AxiosCalls';
import { Codegen } from '../../../Codegen';
import '../dashboard.css';

class CampaignsCreated extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cName: "",
            cType: "",
            cDetails: "",
            status: 0,
            error: false,
            errorMsg:""
            
        };
    }

    //handle input changes
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    //handle file changes
    handleFileChange = (e) => {
      
    }


    //handle form submit
    handleSubmit = async(e) => {
        e.preventDefault()
        const x = Codegen(4)
        var type
        if (this.state.cType === "Medical Fund") {
            type = 1
        } else if (this.state.cType === "Educational Fund") {
            type = 2
        } else {type =2}
        
        let Campaign = {
            title: this.state.cName,
            code: x,
            fundType: type,
            details: this.state.cDetails,
            fundGoal: this.state.cGoal,
            collected: 0,
            createdTime: "Today",
            isActive: true,
            verifiedStatus: false
        }

        const response = await postAPICall("api/FundCampaigns",Campaign)
        console.log(response)
        if (response.data.status === 201) {
            alert("Campaign created successfully. Please wait for it to be verified.");
            this.changeView()
        } else if(response.data.status===500) {
            alert("Error! " + response.data.error)
            this.setState({
                error: true,
                errorCause: response.data.cause
            })
        }
    }

    //to change UI when Campaign created
    changeView = () => this.setState({ status: 1 })

    //After Created
    createdComponent = () => {
        let cont;
        if (this.state.status === 1) {
            cont = <div>
                Campaign created successfully. <a href="#"> View Campaign </a>
            </div>
        }
        return cont;
    }

    //Create Form
    formComponent = () => {
       
        let form =<div className="formContainer">
            <form className="form" onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="cName">Campaign Name</label>
                <input type="text"
                    className="form-control"
                    onChange={this.handleChange}
                    name="cName"
                    id="cName"
                    required
                    placeholder="Enter Campaign Title "
                />
                <small id="cNameHelp" className="form-text text-muted">Enter a valid and sensible Name for better performance of the fund.</small>
       
            </div>
            <div className="form-group">
                <label htmlFor="cGoal">Campaign Goal</label>
                <input type="number"
                    className="form-control"
                    onChange={this.handleChange}
                    name="cGoal"
                    id="cGoal"
                    required
                    placeholder="Total Goal " />
                <small id="goalHelp" className="form-text text-muted">Eg: Rs 20,000</small>
            </div>
            <div className="form-group">
                <label htmlFor="cType">Campaign Type</label>
                <select className="form-control" required name="cType"  onChange={this.handleChange}>
                    <option >Educational Fund</option>
                    <option>Medical Fund</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="cDetails">Details</label>
                <textarea className="form-control"
                    name="cDetails"
                    id="cDetails"
                    onChange={this.handleChange}
                    required
                    rows="3"></textarea>
                <small id="detailsHelp" className="form-text text-muted">Provide proper description and details for better performance of the fund.</small>

            </div>
            {/*<div className="form-group">*/}
            {/*    <label htmlFor="customFile">Upload Pictures</label>*/}
            {/*    <div className="custom-file w-25 ml-2">*/}
            {/*            <input type="file" className="custom-file-input " onChange={this.handleFileChange}  id="customFile" />*/}
            {/*        <label className="custom-file-label" htmlFor="customFile">Choose file</label>*/}
            {/*    </div>*/}

            {/*</div>*/}

            <button className="btn btn-primary m-2" type="submit">Create</button>
            </form>
            </div>

        return form
    }

    //main render
    render() {
        var form;
        if (this.state.status === 0) {
            form = this.formComponent()
        } else {
            form = this.createdComponent()
        }
        return (
            <div>
                {form}
            </div>
        );
    }
}

export default CampaignsCreated;