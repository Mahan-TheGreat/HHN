import React, { Component } from 'react';

import { login } from '../../AxiosCalls';
import SessionUser from './SessionUser';

class LoginCard extends Component {
     constructor(props) {
        super(props);
        this.state = {
            inputName: "",
            inputPassword: "",
            status: 0,
            error: false,
            errormsg: ''
        };

    }

    //Setting User Session
     setSession = (name,code) => {
            SessionUser.setUserName(name)
         SessionUser.setStatus()
         SessionUser.setCode(code)
        
    }

    //Login Method
     handleSubmit = async(e) => {
         e.preventDefault()
         var name = this.state.inputName
         var password = this.state.inputPassword
        let loginUser = {
            Name: name,
            Pass: password
        }
         try {
             const response = await login(loginUser);
             if (response.data.status === 200) {
                 let code = response.data.token
                 alert("Successfully logged in. ")
                 this.setSession(this.state.inputName,  code)
                 this.props.history.push({
                     pathname: '/dashboard',
                     state: { status: true }     
                 })
    
             } else {
                 alert(response.data.error);
             }

         } catch (e) {
             throw e;
         }
            
      }

     //Handle Input Changes
     handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    //get Login Form
     returnForm() {
        const loginForm = <div className="box-shadow ml-auto mr-auto p-2 bg-dark align-content-center">
                <form  onSubmit={this.handleSubmit}>
                <h4 className="text-light w-50 ml-auto mr-auto bg-info rounded card-header mb-3">Welcome Back</h4>

                <div className="form-group row">
                    <label htmlFor="inputName" className="m-1 p-1 h5  col-sm-4 text-info">Username :</label>
                    <input type="text"
                        required
                        onChange={this.handleChange}
                        value={this.state.inputName}   
                        name='inputName'
                        className="m-1 p-1 w-75 col-sm-6 form-control" />
                </div>
                <div className="form-group row">
                    <label htmlFor="form-label" className="m-1 p-1 h5 col-sm-4 text-info">Password :</label>
                    <input type="password"
                        required
                        onChange={this.handleChange}
                        value={this.state.inputPassword}
                        name='inputPassword'
                        className="m-1 w-75 p-1 col-sm-6 form-control" />

                </div>
                <div className="form-group">
                    <button type='submit' className="btn btn-success m-1 p-1 w-25 ">Login</button>

                </div>
            </form>
            </div>

        
        return loginForm;
    }
   
     render() {
       
        const Login = this.returnForm();

        return (

            <div>
                { Login }
            </div>



        );
    }
}

export default LoginCard;