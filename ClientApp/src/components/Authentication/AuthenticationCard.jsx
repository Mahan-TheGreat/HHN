import React, { Component } from 'react';
import LoginCard from './LoginCard';
import SignUpCard from './SignUpCard';
import SessionUser from './SessionUser';
import './Authentication.css';

class AuthenticationCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            view: true
        };
    }
    componentDidMount() {
        if (SessionUser.getStatus() === 'true') {
            alert("Already logged in. Please logout from the dashboard.")
            this.props.history.push({
                pathname: '/dashboard',
                state: { status: true }
            })
        }
    }


    changeState = () => {
        this.setState({
            view: !this.state.view
        })
    }


    viewSignup = () => {
        const SignupCardView = <div className='card  bg-dark rounded text-center auth'>
            <SignUpCard history={this.props.history} changeState={this.changeState} />
            <h6 className="text-warning">Already a Member?
                <button className='btn btn-link m-1 text-success' onClick={ this.changeState}>Login</button></h6>
            </div>

        return SignupCardView

    }
    viewLogin = () => {

        const LoginCardView = <div className='card   bg-dark rounded  text-center auth'>
            <LoginCard history={this.props.history}/>
            <h6 className="text-secondary">Not a Member?
                <button className='btn  btn-link text-danger' onClick={this.changeState}>Sign Up</button></h6></div>

        return LoginCardView

    }

    render() {

        const viewLogin = this.viewLogin();
        const viewSignup = this.viewSignup();
       
        return (
            <div className="container">
                {this.state.view ? viewLogin : viewSignup}
            </div >
         
        );
    }
}

export default AuthenticationCard;