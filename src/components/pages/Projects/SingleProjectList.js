import React from 'react';

const SingleProjectList = ({ project }) => {
    const { projectName, colorClass } = project;
    return (
        <div className="checkbox-container">
            <input type="checkbox" className={colorClass} checked />
            <p className="label">{projectName}</p>
        </div>
    );
};

export default SingleProjectList;