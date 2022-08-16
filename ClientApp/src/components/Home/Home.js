import React, { Component } from 'react';
import './Home.css';

import ViewCampaign from './ViewCampaign';
import ViewEvent from './ViewEvent';
import Footer from './Footer';
import Newsletter from './Newsletter';

import shakeHand from './Help.jpg';
import icon from './icon.png';
import DonatePop from '../Campaign/DonatePop';

export class Home extends Component {
  static displayName = Home.name;

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            status: false,
            Campaigns: [],
            Event: [],
            stat: "",
            id:0,
            emailNewsletter:""
        };

    }
    //handle click 
    handleClick = (e) => {
        const x = e.target.name
        this.props.history.push(`/${x}`)
    }

    //to change state to donating

    changeState = (id,campaigns) => {
        this.setState({ stat: "donating", id: id, Campaigns:campaigns })
        this.donationBox(campaigns)
    }


    //to change state to notDonating

    changeState2 = () => {
     
        this.setState({ stat: "", id: 0, Campaigns: [] })

    }


    //donation box

    donationBox = (campaigns) => {
        let DonateBox
        if (this.state.stat === "donating") {
            let l1 = [...this.state.Campaigns]
            let c1 = l1.find(c => c.id == this.state.id)
            DonateBox = <>< DonatePop item={c1} id={this.state.id} changeState={this.changeState2} /></>
        }
        return DonateBox
    }


    renderComponents = () => {
        const display = <div id="homeContainer">

            <div id="firstContainer" className="d-flex">
                <div id="childOne">
                    <h1>Be The Helping Hand<button onClick={this.handleClick} name="campaign" className="btn btn-sm btn-success btnMain">Help Now</button>
                        <button className="btn btn-sm btn-info btnMain">Learn More</button></h1>
                    
                </div>
                <div id="childTwo">
                    <img src={shakeHand} alt="shaking hands" />
                </div>
            </div>

            <div id="secondContainer" className="containerHome">
                <h3 className="textContainer">Help People Pay Their Medical Bills</h3>
                <p className="miniTextHome">Your small help will help save lives<br/> </p>
                <button onClick={this.handleClick} name="campaign" className="btn btn-sm btn-primary btnContainer mr-2">View Medical Funds</button>
                <ViewCampaign  filter='1' changeState={this.changeState} history={this.props.history}/>
            </div>
            <div id="thirdContainer" filter='2' className="containerHome">
                <h3 className="textContainer">Help Children Pay For Their Education</h3>
                <p className="miniTextHome">Your small help will allow childrens to go to school.</p>
                <button onClick={this.handleClick} name="campaign" className="btn btn-sm btn-primary btnContainer mr-3">View Educational Funds</button>
                <ViewCampaign filter='2' changeState={this.changeState} history={this.props.history} />
            </div>
            <div id="thirdContainer" className="containerHome">
                <h3 className="textContainer">Participate in Events</h3>
                <p className="miniTextHome">Participate in Events near you for noble cause.</p>
                <button onClick={this.handleClick} name="event" className="btn btn-sm btn-primary btnContainer mr-3">View All Events</button>
                <ViewEvent />
            </div>
            <div id="fourthContainer" className="containerHome">
                <img src={icon} alt="newsletter" className="ml-auto mr-auto" width='250' height='250' />
                <h3 className="textContainer">Subscribe to our NewsLetter</h3>
             
                <Newsletter/>
                
            </div>
            <div id="footerHome" location={this.props.location} >
                <Footer />
            </div>
        </div>

        return display
    }

    render() {
        const display = this.renderComponents()
        const donationBox = this.donationBox()
        return (
                <div>
                {display}
                {donationBox}
                </div>
        );
    }
}
