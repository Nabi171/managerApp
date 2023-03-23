import React, { useState } from 'react';
import { useAddTasksMutation } from '../../../features/task/apiSlice';
import { useNavigate } from 'react-router';
const AddTask = () => {
    const [addTasks, { isLoading, isSuccess, isError }] = useAddTasksMutation();
    const [taskName, setTaskName] = useState("");
    const [name, setName] = useState("");
    const [projectName, setprojectName] = useState("");
    const [deadline, setDeadline] = useState("");
    const navigate = useNavigate();



    const handleName = (e) => {
        setName(e.target.value)
    }
    const handleProjectName = (e) => {
        setprojectName(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTasks({
            taskName,
            name,
            projectName,
            deadline,

        });
        navigate('/')
    };

    return (
        <div>
            {/* <Navbar></Navbar> */}
            <div className="container relative">
                <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                    <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
                        Create Task for Your Team
        </h1>

                    <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
                        <form
                            onSubmit={handleSubmit}
                            className="space-y-6">
                            <div className="fieldContainer">
                                <label for="lws-taskName">Task Name</label>
                                <input
                                    value={taskName}
                                    onChange={(e) => setTaskName(e.target.value)}
                                    type="text"
                                    name="taskName"
                                    id="lws-taskName"
                                    required
                                    placeholder="Implement RTK Query"
                                />
                            </div>

                            <div className="fieldContainer">
                                <label>Assign To</label>
                                <select
                                    value={name}
                                    onChange={handleName}
                                    name="teamMember" id="lws-teamMember" required>
                                    <option
                                        value=""
                                        hidden selected>Select Job</option>
                                    <option>Sumit Saha</option>
                                    <option>Sadh Hasan</option>
                                    <option>Akash Ahmed</option>
                                    <option>Md Salahuddin</option>
                                    <option>Riyadh Hassan</option>
                                    <option>Ferdous Hassan</option>
                                    <option>Arif Almas</option>
                                </select>
                            </div>
                            <div className="fieldContainer">
                                <label for="lws-projectName">Project Name</label>
                                <select
                                    value={projectName}
                                    onChange={handleProjectName}
                                    id="lws-projectName" name="projectName" required>
                                    <option
                                        value=""
                                        hidden selected>Select Project</option>
                                    <option>Scoreboard</option>
                                    <option>Flight Booking</option>
                                    <option>Product Cart</option>
                                    <option>Book Store</option>
                                    <option>Blog Application</option>
                                    <option>Job Finder</option>
                                </select>
                            </div>

                            <div className="fieldContainer">
                                <label for="lws-deadline">Deadline</label>
                                <input
                                    value={deadline}
                                    onChange={(e) => setDeadline(e.target.value)}
                                    type="date" name="deadline" id="lws-deadline" required />
                            </div>

                            <div className="text-right">
                                <button type="submit" className="lws-submit">Save</button>
                            </div>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AddTask;