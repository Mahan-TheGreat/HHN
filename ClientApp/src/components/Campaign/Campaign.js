import React, { Component } from 'react';
import { getAPICall } from '../../AxiosCalls';
import icon from './icon.png'
import './Campaign.css';
import DonatePop from './DonatePop';

class Campaign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Campaigns: [],
            status: "",
            id:0,
            loading:true
        };
    }
    componentDidMount() {
        this.getCampaigns();
    }
  
    handleClick = (e) => {
        
        let id1 = e.target.parentNode.parentNode.parentNode.getAttribute('data-source')
        const campaign = [...this.state.Campaigns]
       
        this.setState({ status: "donating", id: id1,Campaigns:campaign})

       
    }

    getCampaigns = async()=> {
        const response = await getAPICall('api/FundCampaigns')
        const data = response.data
        this.setState({ Campaigns: data, loading: false })
        return data
    }

    goDetails = async (e) => {
        const id = e.target.getAttribute('data-source')
        try {
            const response = await getAPICall(`api/FundCampaigns/${id}`);
            let data;
            if (response.status === 200 || 201) {
                data = response.data;
            }
            
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

     getComponents(list1) {
         let listE = []
         list1.forEach(c => {

            if (c.fundType === 1) {
                listE.push(c)
            }
            else if (c.fundType === 2) {
                listE.push(c);
            }
        })
        return listE
    }

   
    changeState = (e) => {
      
        this.setState({ status: "", id: ""})
     
        
    }

    mainCont = (list) => {
       
        let disp = <div id="campaignContainer">
            {list.map(campaign =>
                <div key={campaign.id} data-source={campaign.id} className="campaign text-dark border-primary">
                    <div className="campaign1" >
                    <img src={icon} alt="image" className="campaignImage" />
                    <div className="d-flex">
                    <p className="cText text-dark"> Goal : {campaign.fundGoal}</p>
                            <p className="cText text-dark">Collected : {campaign.collected}</p>
                    </div>
                    </div>
                    <div className="campaign2">
                        <p className="cTitle">{campaign.name}</p>
                        <p className="cDetails">{campaign.details}</p>

                        <div className=" d-flex justify-content-around btnCampaigns">
                            <button onClick={this.handleClick}  data-resource={campaign.id} className="btn  btn-success btnCard   ">Donate</button>
                            <button onClick={this.goDetails} data-source={campaign.id} className="btn  btn-info btnCard ">View Details</button>
                        </div>
                        
                    </div>
                </div>
            )
            }
        </div>
        return disp
    }

    //donation box
   
    donationBox = () => {
        let DonateBox
        if (this.state.status === "donating") {
            let l1 = [...this.state.Campaigns]
            let c1 = l1.find(c=>c.id ==this.state.id)
            console.log(l1)
            DonateBox = <>< DonatePop item={c1} id={this.state.id } changeState={this.changeState}/></>
        }
        return DonateBox
    }
        
    

    render() {
   
        
        let DonateBox = this.donationBox()
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : this.mainCont(this.state.Campaigns);
        
        return (
            
            <div>
                {contents}
                {DonateBox}

            </div>
        );
    }
}

export default Campaign;

