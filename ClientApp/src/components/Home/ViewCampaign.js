import React, { Component } from 'react';
import { getAPICall } from '../../AxiosCalls';
import './viewCampaign.css';
import icon from '../Campaign/icon.png'
import DonatePop from '../Campaign/DonatePop.js'

class viewCampaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Campaigns: [],
            loading: true,
            filter:this.props.filter
        };
    }


    handleBtnClick = (e) => {
        let id1 = e.target.getAttribute('data-resource')
        this.props.changeState(id1,this.state.Campaigns)
    }


    goToDetails = async (e) => {
        console.log(e)
        const id = e.target.getAttribute('data-resource')
        try {
            const response = await getAPICall(`api/FundCampaigns/${id}`);
            let data;
            if (response.status === 200 || 201) {
                data = response.data;
            }
            console.log(data)
            if (data != null) {
                this.props.history.push({
                    pathname: '/detailsCampaign',
                    state: data
                });
            } else {
                alert('Something went wrong. Please Try again.');
            }

        } catch (e) {
            throw e;
        }
    }

    componentDidMount() {
        let x = parseInt(this.state.filter)
        this.getCampaigns(x);
    }

    async getCampaigns(filter) {
        const response = await getAPICall(`api/FundCampaigns`)
        const data = response.data
        this.setState({ Campaigns: data, loading: false })
    }

    getComponents = (list1) =>  {
         const display = (<div id="campaignHomeContainer">
             {list1.map(campaign => {
                 if (campaign.fundType == this.state.filter) {
                     return (
                         <div key={campaign.id} id="campaignHome">
                             <img src={icon} alt="imageCampaign" id="campaignImageHome" />
                             <h4>{campaign.title}</h4>
                             <p className="cTextHome"> Goal : {campaign.fundGoal}</p>
                             <p className="cTextHome">Collected : {campaign.collected}</p>
                             <div className="mt-2 p-2">
                                 <button onClick={this.handleBtnClick} className="btn btn-sm btn-success mr-4 buttonHome" id="donateBtnHome" data-resource={campaign.id}>Donate</button>
                                 <button onClick={this.goToDetails} className="btn btn-sm btn-info buttonHome" id="detailsBtnHome" data-resource={campaign.id}>View Details</button>
                             </div>
                         </div>);
                 }
             }
            )
            }
        </div>)



        return display;

    }

 

    //donation box

    donationBox = () => {
        let DonateBox
        if (this.state.status === "donating") {
            let l1 = [...this.state.Campaigns]
            let c1 = l1.find(c => c.id == this.state.id)
            console.log(l1)
            DonateBox = <>< DonatePop item={c1} id={this.state.id} changeState={this.changeState} /></>
        }
        return DonateBox
    }




    render() {
        let DonateBox = this.donationBox()
    
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.getComponents(this.state.Campaigns);

        return (
            <div>
                {contents}
                {DonateBox}
            </div>
        );

        
    }
}

export default viewCampaign;