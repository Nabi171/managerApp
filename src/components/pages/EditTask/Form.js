import React from 'react';

const Form = () => {
    return (
        <form

            className="space-y-6">
            <div className="fieldContainer">
                <label for="lws-taskName">Task Name</label>
                <input

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

                    type="date" name="deadline" id="lws-deadline" required />
            </div>

            <div className="text-right">
                <button type="submit" className="lws-submit">Save</button>
            </div>
        </form>
    );
};

export default Form;