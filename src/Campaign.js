import React, {Component } from "react";


class Campaign extends Component
{
    constructor(name, maxDays, playerCount)
    {
        super();

        let uniqueId = new Date().getTime().toString(36) + new Date().getUTCMilliseconds();
        this.id = uniqueId;

        this.name = name;
        this.maxDays = maxDays;
        this.playerCount = playerCount;
        this.potions = 0;
        this.daysPlayed = 0;
    }

    renderCampaignBlock()
    {
        return (
		    <div className="todo-card">
			    <p>{this.name}</p>
                <p>{this.maxDays}</p>
                <p>{this.playerCount}</p>
			</div>
		);
    }

    render()
    {
        return;
    }


}

export default Campaign;