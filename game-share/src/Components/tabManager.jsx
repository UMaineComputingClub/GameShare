import React, { useState } from 'react';
import "./tabManager.css"

import TrendingTab from './trendingTab';
import NewTab from './newTab';

function TabManager(props){

    let [tab, setTab] = useState("dashboard");

    return (
        <div id="wholeSite">
            <div className="navbar">
                <div id="navbar-logo">
                    <h4>Game-share</h4>
                </div>
                <div id="tabSelection">
                    <div onClick={() => setTab("trending")}>
                        {tab === "trending" ? <h1 className="selectedTab selectorIcons">Trending</h1> : <h1 className="selectorIcons">Trending</h1>}
                    </div>

                    <div onClick={() => setTab("new")}>
                        {tab === "new" ? <h1 className="selectedTab selectorIcons">New</h1> : <h1 className="selectorIcons">New</h1>}
                    </div>

                </div>
         
                <div id="userIconHolder">
                    <div className="userIcon">User X</div>
                </div>
            </div>
            <hr id="navbarSeparatorLine" />
            <div className="siteContent">
                {tab == "trending" ? <TrendingTab/> : <NewTab/>}
            </div>
        </div>
    )
}

export default TabManager;