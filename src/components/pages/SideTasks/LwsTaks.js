import React from 'react';
import { useGetTasksQuery } from '../../../features/task/apiSlice';
import SingleLwsTask from './SingleLwsTask';

const LwsTaks = () => {
    const { data: tasks, isLoading, isError } = useGetTasksQuery();
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

    if (!isLoading && !isError && tasks.length === 0) {
        content = <p>There is no books</p>;
    }
    if (!isLoading && !isError && tasks.length > 0) {
        content = tasks.map((task) => <SingleLwsTask key={task.id} task={task} />)


    }
    return (
        <div className="lws-task-list">



            {content}


        </div>
    );
};

export default LwsTaks;