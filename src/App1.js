import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { MdDeleteForever } from 'react-icons/md';
import Campaign from './Campaign'


function App1() {

    const [campaigns, setCampaign] = useState([]);
    const [campaignData, setCampaignData] = useState({name: "", maxDays:25, numOfPlayers:4});
    const [error, setError] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setCampaignData((prevCampaignData) => ({ ...prevCampaignData, [name]: value }));
      };

    const handleSubmit = (e) =>
    {
        e.preventDefault();
        if(campaignData)
        {
            setCampaignData(campaignData);
            let campaign = new Campaign(campaignData.name, campaignData.maxDays, campaignData.numOfPlayers);
            
            console.log("campaign -> name =", campaignData.name); 
            console.log("campaign -> maxDays =", campaignData.maxDays);
            console.log("campaign -> playerCount =", campaignData.numOfPlayers);

            console.log(campaign);
            campaigns.push(campaign);

            //console.info(campaigns);
            setCampaignData({});
        }
        else
        {
            setCampaignData({});
        }
    }

    useEffect(() =>
    {
        if(campaigns)
        {
            //console.log("campaigns -> name =", campaigns);
        }
    }, []);

    return (
        <div className="app-container">
            <div className="header-section">
				<div className="app-form-container">
					<form onSubmit={handleSubmit}>
                        <label>Campaign Title: </label>
						<input
							type="text"
                            name = "name"
							value={campaignData.name}
							onChange={handleChange}
							placeholder="Enter campaign name here..."
						/>
                        
                        <br></br>
                        <label>Campaign Length:    </label>
						<input
							type="number"
                            name = "maxDays"
							value={campaignData.maxDays}
							onChange={handleChange}
							placeholder="25"
						/>
                     
                        <br></br>
                        <label>Number of Players:    </label>
						<input
							type="number"
                            name = "playerCount"
							value={campaignData.numOfPlayers}
							onChange={handleChange}
							placeholder="4"
						/>
                     
						<button type="submit" className="btn">
							Add Campaign
						</button>
					</form>
				</div>
				<div className="data-card-container">
					<div className="data-card">
						<h5>{campaigns.length < 10 ? `${campaigns.length}` : campaigns.length}</h5>
						<p>Created campaigns</p>
					</div>
				</div>
            </div>
            <div className="todo-container">
				{campaigns.map((campaign) =>
                    {
                        return (
						    <div className="todo-card">
							    <p>{campaign['name']}</p>
                                <p>{campaign['maxDays']}</p>
                                <p>{campaign['playerCount']}</p>
						    </div>
					    );
                    })
				}
            </div>

        </div>
    );



};

export default App1;