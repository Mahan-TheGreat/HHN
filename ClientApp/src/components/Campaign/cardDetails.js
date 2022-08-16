import React, { Component } from 'react';
import './Campaign.css';
import icon from './icon.png'

class CardDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Comment:"",
            loading:true
        };
    }

    handleCommentSubmit = (e) => {
        e.preventDefault()
        console.log(e)
    }

    handleChange = (e) => {
        console.log(e.target.value)
    }

    handleShare = (e) => {
        const source = e.target.getAttribute('data-source')
        const url = document.location.href
        const title = document.getElementById("mainTitle").innerText
        let link
        if (source === "facebook") {
            link = `https://www.facebook.com/sharer.php?u=${url}`
        } else if (source === "twitter") {
            link = `https://twitter.com/share?url=${url}&text=${title}`
        } else if (source === "whatsapp") {
            link = `https://wa.me/?text=${title} ${url}`
        } else if (source === "linkedin") {
            link = `https://www.linkedin.com/shareArticle?ur=${url}&title=${title}`

        } 
        window.open(link, '_blank');
      

    }
    
    mainComponent = () => {
        const campaign = this.props.location.state;
        let display;
        display = <div>
                    
            <div className="campaignDetails ">

                <div className="d-flex ">
                    <div id="details1">
                        <div>
                            <img src={icon} alt="Campaign Image" className="detailsImage" />
                            <i className="fa fa-heart support" title="Support"></i>
                            <p className="supportText"> 0 Supporters</p>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                             <p className="detailsText text-info "> Goal : {campaign.fundGoal}</p>
                             <p className="detailsText ">Collected : {campaign.collected}</p>
                        </div>
                        <span></span>
                    </div>

                    <div id="details2">
                        <h3 id="mainTitle">{campaign.name}</h3>
                        <div id="detailsDetails">
                          
                            <p>{campaign.details}</p>
                        </div>
                        <div className="d-flex justify-content-center buttonSection">
                            <button className="btn   btn-success btnCard ">Donate</button>
                            <button className="btn   btn-info btnCard">View Donations</button>

                          </div>
                            
                          <div id="shareSocial">
                                <h6 className="text-dark">Share With Friends</h6>
                            <i className="fa fa-facebook-official socialIcon" id="" onClick={this.handleShare} data-source="facebook" aria-hidden="true"></i>
                            <i className="fa fa-twitter-square socialIcon" onClick={this.handleShare} data-source="twitter"  aria-hidden="true"></i>
                            <i className="fa fa-linkedin-square socialIcon" onClick={this.handleShare} data-source="linkedin"  aria-hidden="true"></i>
                            <i className="fa fa-whatsapp socialIcon" onClick={this.handleShare} data-source="whatsapp"  aria-hidden="true"></i>
                          </div>
                        
                    </div>
                </div>
                    
                <div className="commentSection mt-4">
                    <p className=" m-1">0 comments. Be the first one to comment.</p>
                </div>
                <form className="d-flex justify-content-center" onSubmit={this.handleCommentSubmit}>
                    <input className=" form-control w-50 m-1  "
                        onChange={this.handleChange}
                        type="text"
                        placeholder="Add a comment."
                    />
                    <button className="btn btn-sm btnCard btn-primary">Add</button>
                </form>
                </div>
                
                    </div>

        return display;
    }


    render() {
        const display=this.mainComponent()
        return (
            <>
                {display}
            </>
        );
    }
}

export default CardDetails;