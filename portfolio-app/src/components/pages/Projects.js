import React from 'react';
import stockTracker from '../../assets/images/stock-tracker.png';
import weatherApi from '../../assets/images/weatherdashboard.png';
import musicMashup from '../../assets/images/musicmashup.png';
import workScheduler from '../../assets/images/workscheduler.png'

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className="projectDiv">
                <img src={stockTracker} alt="iPortfolio Stock App"/>
                <img src={weatherApi} alt="Weather API"/>
                <img src={musicMashup} alt="Music API"/>
                <img src={workScheduler} alt="Work Scheduling App"/>
            </div>
        </div>
    )
};