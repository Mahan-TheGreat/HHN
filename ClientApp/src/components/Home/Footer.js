import React, { Component } from "react";
import './Home.css';

class Footer extends Component {


    constructor(props) {
        super(props);
        this.state = {

        };

    }

    //handleClick = (e) => {
    //    console.log(e.target.getAttribute('data-source'))
    //    let link = e.target.getAttribute('data-source')
    //    console.log(link)
    //    link = `http://www.${link}`
    //    console.log(this.props)
    //    this.props.location.history.push(link, '_blank')
        
    //}

    getFooter = () => {
        return (<div id="footerMain">
            <div className="footerSocial">
                <h6 className="footerContact">Contact Us</h6>
                <a href="http://www.fb.com" target="blank"><i className="fa fa-facebook-square fa-foot contactIcons" data-source="fb.com" onClick={this.handleClick} aria-hidden="true"></i></a>
                <a href="http://www.twitter.com" target="blank"><i className="fa fa-twitter-square fa-foot contactIcons" data-source="twitter.com" onClick={this.handleClick} aria-hidden="true"></i></a>
                <a href="http://www.linkedin.com" target="blank"><i className="fa fa-linkedin-square fa-foot contactIcons" data-source="linkedin.com" onClick={this.handleClick} aria-hidden="true"></i></a>
                <a href="http://www.telegram.com" target="blank"><i className="fa fa-telegram fa-foot contactIcons" data-source="telegram.com" onClick={this.handleClick} aria-hidden="true"></i></a >
                
            </div>
            <div className="footerLink">
                <a href="/about">About Us</a>
                <a href="/gallery">Gallery</a>
                <a href="/careers">Careers</a>
                <a href="/joinus">Join Us</a>
            </div>
            <div className="footerLink">
                <a href="#">Become a Partner</a>
                <a href="#">Become a Sponsor</a>
                
            </div>
            
        </div>)
    }
    render() {
        const display = this.getFooter()
        return (
        <>
                {display}
                <div className="bg-dark">
                    <p className="text-light p-1 text-center">All Rights Reserved. Copyright @ 2022</p>
                </div>
        </>
            );

    }
}

export default Footer;