import React, { useState } from 'react';
import "./tabManager.css"

import TrendingTab from './trendingTab';
import NewTab from './newTab';

function TabManager(props){

    let [tab, setTab] = useState("trending");

    return (
        <div id="wholeSite">
            <div id="tabManagerLeftHandContent">
                <div className="navbar">
                    <div id="navbar-logo">
                        <img id="umaineLogo" src="https://umaine.edu/wp-content/uploads/sites/2/2022/08/Logo-featured-image.jpg"></img>
                    </div>
                    <div id="tabSelectionVertical">
                        <div onClick={() => setTab("trending")}>
                            {tab === "trending" ? <h1 className="selectedTab selectorIcons">Trending</h1> : <h1 className="selectorIcons">Trending</h1>}
                        </div>

                        <div onClick={() => setTab("new")}>
                            {tab === "new" ? <h1 className="selectedTab selectorIcons">New</h1> : <h1 className="selectorIcons">New</h1>}
                        </div>

                        <div onClick={() => setTab("collaboration")}>
                            {tab === "collaboration" ? <h1 className="selectedTab selectorIcons">Collaboration</h1> : <h1 className="selectorIcons">Collaboration</h1>}
                        </div>

                        <div onClick={() => setTab("settings")}>
                            {tab === "settings" ? <h1 className="selectedTab selectorIcons">Settings</h1> : <h1 className="selectorIcons">Settings</h1>}
                        </div>

                    </div>
            
                </div>
            </div>

            <div id="tabManagerRightHandContent">
                    <div id="navbarHorizontal">
                        <div id="tabSelectionHorizontal">
                            <div onClick={() => setTab("uploadGame")}>
                                {tab === "uploadGame" ? <h1 className="selectedTab selectorIcons">Upload Game</h1> : <h1 className="selectorIcons">Upload Game</h1>}
                            </div>

                            <div onClick={() => setTab("gamePage")}>
                                {tab === "gamePage" ? <h1 className="selectedTab selectorIcons">Game Page</h1> : <h1 className="selectorIcons">Game Page</h1>}
                            </div>

                        </div>
                
                    </div>
            
 
                    <div className="siteContent">
                        {tab == "trending" ? <TrendingTab/> : <NewTab/>}
                    </div>
           
            </div>
        </div>
    )
}

export default TabManager;