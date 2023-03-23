import React from 'react';
import Navbar from './pages/Nav/Navbar';
import ProjectList from './pages/Projects/ProjectList';
import TeamMembers from './pages/TeamMembers/TeamMembers';
import SideTasks from './pages/SideTasks/SideTasks';

const Home = () => {
    return (
        <div class="text-[#111827]">

            {/* <Navbar /> */}
            <div className="container relative">
                <div className="sidebar">
                    {/* <!-- Projects List --> */}
                    <ProjectList />

                    {/* <!-- Team Members --> */}
                    <TeamMembers />
                </div>

                <SideTasks />
            </div>
        </div>
    );
};

export default Home;