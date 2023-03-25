import React, { useState } from 'react';
import { useGetTasksQuery } from '../../../features/task/apiSlice';

const SingleProjectList = ({ project }) => {
    const { colorClass, projectName } = project;

    return (
        <div className="checkbox-container">
            <input type="checkbox"
                type="checkbox"
                // value={item.taskName}
                // checked={checkboxValues.includes(item.value)}
                // onChange={handleCheckboxChange}
                className={colorClass} />
            <p className="label">{projectName}</p>
        </div>
    );
};

export default SingleProjectList;