import React, { useState } from 'react'
import ReactFlagsSelect from "react-flags-select";
const InputPhone = ({ label, name, type = 'text' }) => {
    const [select, setSelect] = useState("SE");
    const onSelect = (code) => setSelect(code);
    console.log("SELECT", select);
    return (

        <div className='relative'>
            <div className='absolute w-[50px] flex pt-1 justify-start left-0 '>

                <ReactFlagsSelect
                    selected={select}
                    onSelect={onSelect}

                // /*showSelectedLabel={showSelectedLabel}
                // selectedSize={selectedSize}
                // showOptionLabel={showOptionLabel}
                // optionsSize={optionsSize}
                // placeholder={placeholder}
                // searchable={searchable}
                // searchPlaceholder={searchPlaceholder}
                // alignOptionsToRight={alignOptionsToRight}
                // fullWidth={fullWidth}
                // disabled={disabled} 
                />
            </div>
            <input
                id={name}
                name={name}
                className='w-full  border border-[#DCDBDD] p-3 peer placeholder-transparent rounded-md focus:outline-none '
                placeholder=' '
                type='number'

            />
            <label
                htmlFor={name}
                className='absolute left-[75px] top-3 text-gray-500 transition-all duration-300 bg-white  peer-placeholder-shown:top-3 peer-placeholder-shown:text-base 
                peer-placeholder-shown:px-2
                peer-focus:-top-3 peer-focus:text-sm peer-focus:text-[#84818A] cursor-pointer'
            >
                {label}
                <span className='text-red-500'>*</span>
            </label>

        </div>
    )
}

export default InputPhone