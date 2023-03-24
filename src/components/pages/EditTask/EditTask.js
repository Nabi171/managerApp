import React, { useState } from 'react';
import Navbar from '../Nav/Navbar';
import Form from './Form';


const EditTask = () => {

    return (
        <div>
            <Navbar />
            <div className="container relative">
                <main className="relative z-20 max-w-3xl mx-auto rounded-lg xl:max-w-none">
                    <h1 className="mt-4 mb-8 text-3xl font-bold text-center text-gray-800">
                        Create Task for Your Team
        </h1>

                    <div className="justify-center mb-10 space-y-2 md:flex md:space-y-0">
                        <Form />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EditTask;