import React, { Component } from 'react';
import { postAPICall } from '../../AxiosCalls';
import SessionUser from '../Authentication/SessionUser';

class DonatePop extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status: 0, //normal state 1= completed state
            amount: 0,
            esewaId:0,
        };
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = async() => {
        let amount = this.state.amount
        let esewaId = this.state.esewaId
        let contId = await SessionUser.getCode()
        const fund = {
            campaignId:parseInt(this.props.id),
            contributorId:contId,
            fundAmount: parseInt(amount),
            esewaId: parseInt(esewaId),
            isVerified: false,
            isDelivered:false
        }

        if (fund.contributorId === null) {
            alert("Please login to donate.")

        }

                this.setState({ status: 1 })
   
        

    }

    renderDonatePop = (c1) => {
        let displayDonateBox
        if (this.state.status === 0) {
            displayDonateBox =
                <div className="donateBox" >
                    <div id="donateBox1">
                        <h3 className=" text-light">{c1.name}</h3>
                        <p className="text-info">Goal: {c1.fundGoal}</p>
                        <p className="text-info">Collected: {c1.collected}</p>

                        <div className="mt-3 d-flex justify-content-around">
                            <div className="d-block">
                                <label className="text-light" htmlFor="donateAmount">Amount(RS)</label>
                                <input type="number"
                                className="form-control text-info"
                                required
                                    onChange={this.handleChange}
                                    name="amount"
                                    id="donateAmount"
                                    required
                                    min="10"
                                    max="5000"

                                    placeholder="Total Amount To Donate " />
                                <small id="donateAmount" className="form-text text-light">Enter Amount between 10-5000.</small>
                            </div>
                        </div>

                        <div className="d-flex justify-content-around">
                            <div>
                                <label className="text-light" htmlFor="esewaId">Esewa Id</label>
                                <input type="tel"
                                className="form-control text-info"
                                
                                    onChange={this.handleChange}
                                    name="esewaId"
                                    id="esewaID"
                                    required
                                    placeholder="Enter your esewa Id " />


                            </div>
                        </div>

                        <button className="btn btn-primary btn-sm mt-2" onClick={this.handleSubmit}>Donate</button>
                        <div className=" p-1 br-3 creditCardHolder">
                            <p className="text-dark h3">Other methods of payment</p>
                            <i className="fa fa-cc-visa creditCard" aria-hidden="true"></i>
                            <i className="fa fa-cc-mastercard creditCard" aria-hidden="true"></i>
                            <i className="fa fa-cc-paypal creditCard" aria-hidden="true"></i>

                        </div>
                    </div>


                    <div id="donateBox2">
                        <button id="closeDonate" className="btn btn-sm btn-danger" onClick={this.props.changeState}>X</button>
                    </div>
                </div>
        } else{
            displayDonateBox = <div id="successDonate" className="donateBox">
                <div className="donateBox2">
                    <button id="closeDonate" className="btn btn-sm btn-danger" onClick={this.props.changeState}>X</button>
                </div>
                <h3>Donation successfull</h3>
                <a href='#' className="btn btn-sm btn-primary">View Campaign</a>
              
            </div>
        }
         

        return displayDonateBox
    }

    render() {
        const content = this.renderDonatePop(this.props.item)
        return (
            <div>
                {content}
            </div>
        );
    }
}

export default DonatePop;