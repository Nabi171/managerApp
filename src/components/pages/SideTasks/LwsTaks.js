import React from 'react';
import { useGetTasksQuery } from '../../../features/task/apiSlice';
import SingleLwsTask from './SingleLwsTask';

const LwsTaks = ({ search, check }) => {
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


        if (!check && !search) {
            content = tasks.map((task) => <SingleLwsTask key={task.id} task={task} />)
        }
        if (check) {

            const taskCheck = tasks.filter((task) => task.project.projectName == check)
            let tasks2 = taskCheck.filter(task => task.taskName.toLowerCase().includes(search.toLowerCase()));
            content = tasks2.map((task) => <SingleLwsTask key={task.id} task={task} />)
        }

        // if (!search) {
        //     // if (check = "Scoreboard") {
        //     const taskCheck = tasks.filter((task) => task.project.projectName == check)

        //     content = taskCheck.map((task) => <SingleLwsTask key={task.id} task={task} />)
        //     // }


        // }

        // else if (search) {
        //     const taskCheck = tasks.filter((task) => task.project.projectName == check)
        //     let tasks2 = taskCheck.filter(task => task.taskName.toLowerCase().includes(search.toLowerCase()));
        //     content = tasks2.map((task) => <SingleLwsTask key={task.id} task={task} />);
        // }
        else if (search) {
            // const taskCheck = tasks.filter((task) => task.project.projectName == check)
            let tasks2 = tasks.filter(task => task.taskName.toLowerCase().includes(search.toLowerCase()));
            content = tasks2.map((task) => <SingleLwsTask key={task.id} task={task} />);
        }

        // else if (check == "Scoreboard" && check == "Product Cart" && check == "Flight Booking" && check == "Book Store" && check == "Blog Application" && check == "Blog Application") {
        //     content = tasks.map((task) => <SingleLwsTask key={task.id} task={task} />)
        // }
        else {
            content = tasks.map((task) => <SingleLwsTask key={task.id} task={task} />)
        }




        // content = tasks.map((task) => <SingleLwsTask key={task.id} task={task} />)


    }
    return (
        <div className="lws-task-list">



            {content}


        </div>
    );
};

export default LwsTaks;