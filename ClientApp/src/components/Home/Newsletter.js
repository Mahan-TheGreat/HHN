import React, { Component } from 'react';
import { postAPICall } from '../../AxiosCalls';
class Newsletter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0,
            email:""
        };
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
      
    }
    handleSubmit = async(e) => {
        e.preventDefault()
        const email = this.state.email
        console.log(email)
        let x = {
            email:this.state.email
        }
        let response = await postAPICall('api/Newsletters',x)
        console.log(response)
        if (response === 201 || 200) {
            alert('Subsscribed to newsletter.')
        }
        else {
            alert("Something went wrong. Please try again")
        }
    }
    render() {
        return (
            <form id="newsLetterForm" onSubmit={this.handleSubmit}>
                <div className="form-group emailNewsletter ml-auto mr-auto">
                    <input type="email"
                        required
                        onChange={this.handleChange}
                        value={this.state.email}
                        name='email'
                        placeholder="  youremail@example.com  "
                        className="m-1 mr-2 p-1 col-8 form-control form-control-lg" />
                    <button onClick={this.handleSubmit}  className="btn btn-sm btn-warning">Subscribe</button>
                </div>
            </form>
        );
    }
}

export default Newsletter;