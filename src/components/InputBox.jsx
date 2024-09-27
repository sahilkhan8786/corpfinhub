import React from 'react';

const InputBox = ({ label, name }) => {
    return (
        <div className='relative'>
            <input
                id={name}
                name={name}
                className='w-full  border border-[#DCDBDD] p-3 peer placeholder-transparent rounded-md focus:outline-none '
                placeholder=' '
                type='text'
            />
            <label
                htmlFor={name}
                className='absolute left-3 top-3 text-gray-500 transition-all duration-300 bg-white  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-placeholder-shown:px-2
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#84818A] cursor-pointer'
            >
                {label}
                <span className='text-red-500'>*</span>
            </label>
        </div>
    );
};

export default InputBox;
