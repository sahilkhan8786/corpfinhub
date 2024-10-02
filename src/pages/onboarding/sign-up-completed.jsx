import React from 'react'

const SignupCompleted = () => {
    return (
        <section className='flex items-center justify-center w-full md:w-[556px] h-screen flex-col gap-7 md:mx-auto px-4'>
            <img src="/completed.png" alt="" />
            <h1 className='text-[#18191c] font-medium text-[16px] px-2 md:px-0 text-center'>🎉 Congratulations, Your sign up is complete!</h1>
            <p className='text-center text-[#5E6670] text-[16px]'>Donec hendrerit, ante mattis pellentesque eleifend, tortor urna malesuada ante, eget aliquam nulla augue hendrerit ligula. Nunc mauris arcu, mattis sed sem vitae.</p>
            <div className='flex items-center justify-center w-full  md:w-[410px] md:gap-4   '>
                <button className='text-primary p-3 hover:opacity-85 bg-[#8DF5E780] w-[80%] mx-4 whitespace-nowrap'>View Dashboard</button>
                <button className='text-white bg-primary p-3 hover:opacity-85 w-[80%] mx-4 whitespace-nowrap'>List Business &rarr;</button>
            </div>
        </section>
    )
}

export default SignupCompleted