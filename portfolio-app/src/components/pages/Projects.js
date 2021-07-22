import React from 'react';
import stockTracker from '../../assets/images/stock-tracker.png';
import weatherApi from '../../assets/images/weatherdashboard.png';
import musicMashup from '../../assets/images/musicmashup.png';
import workScheduler from '../../assets/images/workscheduler.png';
import TechBlog from '../../assets/images/tech-blog.png';
import NoteTaker from '../../assets/images/note-taker.png';

export default function Projects() {
    return (
        <div>
            <h1>Projects</h1>
            <div className="projectDiv">
                <img className='projectImg' src={stockTracker} alt="iPortfolio Stock App"/>
                <img className='projectImg' src={weatherApi} alt="Weather API"/>
                <img className='projectImg' src={musicMashup} alt="Music API"/>
                <img className='projectImg' src={workScheduler} alt="Work Scheduling App"/>
                <img className='projectImg' src={TechBlog} alt="Tech Blog"/>
                <img className='projectImg' src={NoteTaker} alt="Note Taker App"/>
            </div>
        </div>
    )
};