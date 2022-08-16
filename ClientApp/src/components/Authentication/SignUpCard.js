import React, { Component } from 'react';
import { postAPICall } from '../../AxiosCalls';
import {Codegen } from '../../Codegen';

class SignUpCard extends Component{
     constructor(props) {
        super(props);
        this.state = {
            inputName: "",
            inputEmail: "",
            inputPassword: "",
            status: 0,
            error: false,
            errormsg: ''
        };

    }

    ////getting user Id
    // getUserId = async (name) => {
    //    let Name = name;
    //    const request = {
    //        method: 'POST',
    //        headers: { 'Content-Type': 'application/json' },
    //        body: JSON.stringify(Name)
    //    }
    //    const response = await fetch(`api/SUsers/GetId`, request);
    //    const data = await response.json();
    //    return parseInt(data.userId);
    //}

    //Creating User Profile
    createProfile = async () => {
        let code = Codegen(5);
        let Profile = {
            UserProfileCode: code,
            UserName: this.state.inputName,
        }
        const response = await postAPICall('api/UsersProfiles', Profile)
        console.log(response)
        const profile = response.data;
        return profile;      
    }

    //Adding a User
     AddUser = async (e) => {
         e.preventDefault();
         let x = await this.createProfile();
         console.log(x)
        let User = {
            name: this.state.inputName,
            userCode: Codegen(4),
            userProfileId: x.id,
            email: this.state.inputEmail,
            pass: this.state.inputPassword,
            canVerify: false

        }
        console.log(User)
         try {
             const response = await postAPICall('api/Users',User);
             console.log(response);
             if (response.status === 201) {
                 alert("Signup Successfull.");
                 this.props.changeState();
             } else {
                 alert("Something went wrong please try again.");
             }
         } catch(ex){
             throw ex;
         }

    }

    //Handle Input Changes
     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    //Render main component
    displayComponent = () => {

        let SignUp;
        if (this.state.status === 0) { 
             SignUp = <div className="box-shadow  bg-dark align-content-center">
                 <form onSubmit={this.AddUser} >
                    <h4 className="text-light bg-info ml-auto mr-auto card-header w-50 p-3 mb-3">Create Account.</h4>

                     <div className="form-group row">
                         <label htmlFor="inputName m-1" className="m-1 p-1  h5 col-sm-4 text-info">UserName :</label>
                         <input type="text"
                             required
                            onChange={this.handleChange}
                            value={this.state.inputName}
                            name='inputName'
                             className="m-1 w-75 p-1 col-sm-6 form-control" />
                    </div>
                     <div className="form-group row">
                         <label htmlFor="inputEmail m-1" className="m-1 p-1 c h5  col-sm-4 text-info">Email :</label>
                         <input type="email"
                             required
                            onChange={this.handleChange}
                            value={this.state.inputEmail}
                            name='inputEmail'
                             className="m-1 w-75 p-1 col-sm-6 form-control" />
                    </div>
                     <div className="form-group row">
                         <label htmlFor="inputPassword m-1" className="m-1 p-1 h5  col-sm-4 text-info">Password :</label>
                         <input type="password"
                             required
                            onChange={this.handleChange}
                            value={this.state.inputPassword}
                            name='inputPassword'
                             className="m-1 w-75 p-1 col-sm-6 form-control" />

                    </div>
                     <div className="form-group">
                        <button type='submit' className="btn btn-primary m-1 p-1 w-25">SignUp</button>

                     </div>
                 </form>
                </div>
        } else {
             SignUp = <p className='text-success'>SignUp Sucessfull.</p>
        }

        return SignUp;
    }

    //Get Error Messages
     getErrorMsg = () => {

        let errorMsg;
        if (this.state.error === true) {
            errorMsg = <p className="text-danger">Error: {this.state.errormsg}</p>
        } else {
            errorMsg = null;
        }
        return errorMsg;
    }

     render() {
        const errorMsg = this.getErrorMsg();
        const SignUp = this.displayComponent();

        return (
    
            <>
                {errorMsg}
                {SignUp}
            </>
                
            
            
        );
    }
}

export default SignUpCard;