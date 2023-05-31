import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { MdDeleteForever } from 'react-icons/md';


function App() {
  const [campaigns, setCampaigns] = useState([]);
  const [campaignItem, setCampaignItem] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e) => 
  {
	  e.preventDefault();
		
    if (campaignItem) 
    {
      setError(false);
			let uniqueId =
				new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
			let newCampaignItem = {
				id: uniqueId,
				name: campaignItem,
			};
			setCampaigns([newCampaignItem, ...campaigns]);
			setCampaignItem('');

    }
    else
    {
      setError(true);
      setCampaignItem('');
    }
  };

  const deleteCampaign = (id) => {
		let newCampaigns = campaigns.filter((campaigns) => campaigns.id !== id);
		setCampaigns([...newCampaigns]);
	};

	useEffect(() => 
  {
		const campaigns = JSON.parse(localStorage.getItem('campaigns'));
		if (campaigns) {
			setCampaigns(campaigns);
		}
	}, []);

  useEffect(() => {
		localStorage.setItem('campaigns', JSON.stringify(campaigns));
	}, [campaigns]);

  let Today = new Date().toLocaleDateString('en-us', { weekday: 'long' });
	let day = new Date().toLocaleDateString('en-us', { day: 'numeric' });
	let month = new Date().toLocaleDateString('en-us', { month: 'short' });

  return (
    <div className="app-container">
			<div className="header-section">
				<div className="app-form-container">
					<form onSubmit={handleSubmit}>
						<input
							type="text"
							value={campaignItem}
							className={error ? 'error' : ''}
							onChange={(e) => setCampaignItem(e.target.value)}
							placeholder="Enter campaign name here..."
						/>
						<button type="submit" className="btn">
							Add Campaign
						</button>
					</form>
				</div>
				<div className="data-card-container">
					<div className="data-card">
						<h5>{campaigns.length < 10 ? `0${campaigns.length}` : campaigns.length}</h5>
						<p>Created campaigns</p>
					</div>
				</div>
        <div className="todo-container">
				{campaigns.map((campaignItem) => {
					const { id, campaigns } = campaignItem;
					return (
						<div key={id} className="todo-card">
						
							<p>{campaigns}</p>
							<MdDeleteForever
								onClick={() => deleteCampaign(id)}
								className="icon delete-icon"
							/>
						</div>
					);
				})}
			</div>
      
			</div>
		</div>
	);
};

export default App;
