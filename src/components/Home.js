import React, { useState } from 'react';
import Navbar from './pages/Nav/Navbar';
import ProjectList from './pages/Projects/ProjectList';
import TeamMembers from './pages/TeamMembers/TeamMembers';
import SideTasks from './pages/SideTasks/SideTasks';
import img from "../components/pages/Nav/logo.svg";
import { Link } from 'react-router-dom';

const Home = () => {
    //search
    const [search, setNewSearch] = useState("");
    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };
    return (
        <div class="text-[#111827]">

            {/* <Navbar /> */}
            <nav className="container relative py-3">
                <div className="flex items-center justify-between">
                    <Link to="/">
                        <img src={img} />
                    </Link>
                    <div className="flex-1 max-w-xs search-field group">
                        <i className="fa-solid fa-magnifying-glass search-icon group-focus-within:text-blue-500"></i>
                        <input type="text"
                            value={search} onChange={handleSearchChange}
                            placeholder="Search Task" className="search-input" id="lws-searchTask" />
                    </div>
                </div>
            </nav>

            {/* nav close  */}
            <div className="container relative">
                <div className="sidebar">
                    {/* <!-- Projects List --> */}
                    <ProjectList />

                    {/* <!-- Team Members --> */}
                    <TeamMembers />
                </div>

                <SideTasks
                    search={search}

                />
            </div>
        </div>
    );
};

export default Home;