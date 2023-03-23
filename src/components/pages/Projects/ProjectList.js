import React from 'react';
import { useGetProjectsQuery } from '../../../features/task/apiSlice';
import SingleProjectList from './SingleProjectList';

const ProjectList = () => {
    const { data: projects, isLoading, isError } = useGetProjectsQuery();
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