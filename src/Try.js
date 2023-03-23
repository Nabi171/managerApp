import React from 'react';
import Navbar from './components/pages/Nav/Navbar';
import ProjectList from './components/pages/Projects/ProjectList';
import TeamMembers from './components/pages/TeamMembers/TeamMembers';
import SideTasks from './components/pages/SideTasks/SideTasks';

const Try = () => {
    return (
        <div class="text-[#111827]">
            {/* <nav className="container relative py-3">
                <div className="flex items-center justify-between">
                    <a href="./index.html">
                        <img src="./images/logo.svg" />
                    </a>
                    <div className="flex-1 max-w-xs search-field group">
                        <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                        <input type="text" placeholder="Search Task" className="search-input" id="lws-searchTask" />
                    </div>
                </div>
            </nav> */}
            <Navbar></Navbar>
            <div className="container relative">
                <div className="sidebar">
                    {/* <!-- Projects List --> */}
                    <ProjectList></ProjectList>

                    {/* <!-- Team Members --> */}
                    <TeamMembers></TeamMembers>
                </div>

                <SideTasks></SideTasks>
            </div>
        </div>
    );
};

export default Try;