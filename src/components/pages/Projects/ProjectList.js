import React, { useState } from 'react';
import { useGetProjectsQuery, useGetTasksQuery } from '../../../features/task/apiSlice';
import SingleProjectList from './SingleProjectList';

const ProjectList = () => {
    const { data: projects, isLoading, isError } = useGetProjectsQuery();


    //checkbox
    // const { data: tasks, isLoading2, isError2 } = useGetTasksQuery();
    // const [checkboxValues, setCheckboxValues] = useState([]);
    // const handleCheckboxChange = (event) => {
    //     const value = event.target.value;
    //     if (event.target.checked) {
    //         setCheckboxValues([...checkboxValues, value]);
    //     } else {
    //         setCheckboxValues(checkboxValues.filter((val) => val !== value));
    //     }
    // };
    // const filteredData = tasks.filter((item) => {
    //     return checkboxValues.includes(item.taskName);
    // });































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
        content = projects.map((project) => <SingleProjectList key={project.id} project={project} />)


    }
    return (
        <div>
            <h3 className="text-xl font-bold">Projects</h3>
            <div className="mt-3 space-y-4">
                {content}
            </div>
        </div>
    );
};

export default ProjectList;