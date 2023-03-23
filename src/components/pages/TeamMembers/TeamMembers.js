import React from 'react';
import { useGetTeamQuery } from '../../../features/task/apiSlice';
import SingleTeamMember from './SingleTeamMember';

const TeamMembers = () => {
    const { data: team, isLoading, isError } = useGetTeamQuery();
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

    if (!isLoading && !isError && team.length === 0) {
        content = <p>There is no books</p>;
    }
    if (!isLoading && !isError && team.length > 0) {
        content = team.map((tm) => <SingleTeamMember key={tm.id} tm={tm} />)


    }
    return (
        <div className="mt-8">
            <h3 className="text-xl font-bold">Team Members</h3>
            <div className="mt-3 space-y-4">
                {content}


            </div>
        </div>
    );
};

export default TeamMembers;