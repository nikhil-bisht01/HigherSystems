import React from 'react';
import { AiOutlineLoading } from 'react-icons/ai';

const Loader = () => {
    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-800 bg-opacity-75 z-50">
            <div className="flex flex-col items-center">
                <div className="p-4 bg-white rounded-full shadow-lg animate-pulse">
                    <AiOutlineLoading className="animate-spin text-blue-500 text-4xl" />
                </div>
                <p className="mt-4 text-white text-lg font-semibold animate-bounce">Please wait...</p>
            </div>
        </div>
    );
};

export default Loader;
