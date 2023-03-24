import React from 'react';
import LwsTaks from './LwsTaks';
import AddNew from './AddNew';

const SideTasks = ({ search }) => {
    return (
        <div className="lg:pl-[16rem] 2xl:pl-[23rem]">
            <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                <AddNew />
                <LwsTaks
                    search={search}
                />

            </main>
        </div>
    );
};

export default SideTasks;