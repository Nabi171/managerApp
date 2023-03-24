import React, { useState } from 'react';
import { useEditTaskMutation } from '../../../features/task/apiSlice';
import { useNavigate } from 'react-router';

const Form = ({ task }) => {
    const navigate = useNavigate();
    const {
        id,
        taskName: initialTaskName,
        teamMember: initialTeamMember,
        project: initialProject,
        deadline: initialDeadline,

    } = task;
    const [editTask, { isLoading, isError, isSuccess }] =
        useEditTaskMutation();
    const [taskName, setTaskName] = useState(initialTaskName);
    const [teamMember, setTeamMember] = useState(

        { name: initialTeamMember });
    // const [teamMember, setName] = useState({
    //     name: ""
    // });
    const handleName = (e) => {
        const { name, value } = e.target;
        setTeamMember((prevFormData) => ({ ...prevFormData, [name]: value }))
        // setName(e.target.value)
    }
    const [project, setProject] = useState(initialProject);
    const [deadline, setDeadline] = useState(initialDeadline);
    const handleSubmit = (e) => {
        e.preventDefault();
        editTask({
            id,
            data: {
                taskName,
                teamMember,
                project,
                deadline,

            },
        });
        navigate('/')
        window.location.reload();
    };
    return (
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
                    value={teamMember.name}
                    onChange={handleName}
                    name="name" id="lws-teamMember" required>
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
                    value={project}
                    onChange={(e) => setProject(e.target.value)}
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
    );
};

export default Form;