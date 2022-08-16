import React, { Component } from 'react';
import { getAPICall,postAPICall } from '../../../AxiosCalls';
import { Codegen } from '../../../Codegen';
import SessionUser from '../../Authentication/SessionUser';

class CreateTeam extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tName: "",
            tCode: "",
            tAbout: "",
            status: 0,
            error: 0,
            errorCause: 0

        };
    }
    
    //handle input changes
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //Gets User Code
    getCode = async (name) => {
        const response = await getAPICall(`api/Users/GetUserCode/${name}`)
        return response.data;      
    }

    //handle form submit
    handleSubmit = async (e) => {
        
        e.preventDefault()
        const x = Codegen(4)
        const name = await SessionUser.getUserName()
        const y = await this.getCode(name)

        let Team = {
            name: this.state.tName,
            code: x,
            about: this.state.tAbout,
            members:"1",
            isActive: true,
            isVerified: false
        }
        console.log(Team)
        const response = await postAPICall("api/Teams", Team)

        if (response.data.status === 200) {
            alert("Team created successfully. Please wait for it to be verified.")
            this.changeView()
        } else if (response.data.status === 500) {
            alert(response.data.error);
            this.setState({
                error: true,
                errorCause: response.data.cause
            })
        }
    }

    //to change UI when team created
    changeView = () => this.setState({status:1})


    //After Created
    createdComponent = () => {
        let cont;
        if (this.state.status === 1) {
            cont = <div>
                        Team created successfully. <a href="#"> View Team page </a>
                    </div>
        }
        return cont;
    }

    //main form component
    formComponent = () => {
        const teamForm = <form className='form' onSubmit={this.handleSubmit}>
            <div className="form-group">
                <label htmlFor="cName">Team Name</label>
                <input type="text"
                    className="form-control"
                    id="tName"
                    name="tName"
                    required
                    onChange={this.handleChange}
                    placeholder="Enter Team Name " />
                <small id="tNameHelp" className="form-text text-muted">Enter a valid and sensible Name.</small>
            </div>

            <div className="form-group">
                <label htmlFor="tAbout">About Team</label>
                <textarea type="text"
                    className="form-control"
                    id="tAbout"
                    name="tAbout"
                    required
                    onChange={this.handleChange}
                    placeholder="Write something about your team... " />
            </div>

            <button className="btn btn-primary m-2" type="submit">Create</button>
        </form>

        return teamForm
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
            <div className='formContainer'>
                {form}
            </div>

        );
    }
}

export default CreateTeam;