import React, { useState } from 'react';
import Navbar from './pages/Nav/Navbar';
import ProjectList from './pages/Projects/ProjectList';
import TeamMembers from './pages/TeamMembers/TeamMembers';
import SideTasks from './pages/SideTasks/SideTasks';
import img from "../components/pages/Nav/logo.svg";
import { Link } from 'react-router-dom';
import { useGetProjectsQuery } from '../features/task/apiSlice';

const Home = () => {
    //search
    const [search, setNewSearch] = useState("");
    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };

    //projects list
    const { data: projects, isLoading, isError } = useGetProjectsQuery();
    //check project list
    const [check, setCheck] = useState('');
    console.log(check)
    const handleCheck = (pd) => {

        setCheck(pd)
        // console.log(check)
    }
    // decide what to render
    let content = null;

    if (isLoading) {
        content = (
            <>
                <p>loading...</p>
            </>
        );
    }

    if (!isLoading && isError) {
        content = <p>There is an error</p>;

    }

    if (!isLoading && !isError && projects.length === 0) {
        content = <p>There is no books</p>;
    }
    if (!isLoading && !isError && projects.length > 0) {
        content = projects.map((project) =>


            // <SingleProjectList key={project.id} project={project} />

            <div className="checkbox-container">
                <input type="checkbox"
                    type="checkbox"
                    onClick={() => handleCheck(project.projectName)}

                    className={project.colorClass} />
                <p className="label">{project.projectName}</p>
            </div>

        )


    }

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
                    {/* <ProjectList /> */}

                    {/* <!-- Team Members --> */}
                    <div>
                        <h3 className="text-xl font-bold">Projects</h3>
                        <div className="mt-3 space-y-4">
                            {content}

                        </div>
                    </div>
                    <TeamMembers />
                </div>

                <SideTasks
                    check={check}
                    search={search}

                />
            </div>
        </div>
    );
};

export default Home;