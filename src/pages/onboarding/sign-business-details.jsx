import React from 'react'
import InputBox from '../../components/InputBox'
import InputSelect from '../../components/InputSelect'

const SignBusinessDetails = () => {
    return (
        <section className='bg-primary w-full min-h-screen flex flex-col '>
            <div className=' flex w-full flex-col   md:flex-row'>
                {/* LEFT */}
                <div className='text-white flex-1 flex items-center justify-center flex-col md:relative mt-8 md:mt-0 px-3 md:px-0'>
                    <h1 className='font-semibold text-4xl md:text-[48px] leading-tight w-full md:w-[360px]'>Step Away
                        to list with Us.</h1>
                    <p className='text-[14px] w-full my-12 md:w-[360px]'>Please provide all the details correctly
                        to get more responses from the buyers..</p>


                    <p className='md:absolute md:bottom-12 my-6 md:my-0'>Having troubles?
                        <span className='underline px-1 cursor-pointer'>Get Help</span>

                    </p>

                    <div className='flex gap-2 items-center mt-16 mb-4 md:mb-0'>
                        <img src="/business-icon.png" alt="" />
                        <p>3k+ people benefitted from CorpFin.</p>
                    </div>
                </div>

                {/* RIGHT */}
                <div className='bg-white  flex-1 rounded-tl-3xl  md:rounded-bl-3xl rounded-tr-3xl flex justify-center items-center flex-col gap-4   w-full px-4 md:px-0 md:w-[393px] relative h-screen py-12 md:py-0 pb-24 md:pb-0'>


                    <div className='  w-full md:w-[393px] '>
                        <InputBox label="Company Name" name='Company Name' />
                    </div>
                    <div className='  w-full md:w-[393px] '>
                        <InputSelect name="Company Type" id='Company Name' />
                    </div>
                    <div className='  w-full md:w-[393px] '>
                        <InputBox label="Position in Company" name='Position in Company' />
                    </div>
                    <div className='  w-full md:w-[393px] '>
                        <InputSelect name="Platform" id='Platform' />
                    </div>
                    <div className='  w-full md:w-[393px] '>
                        <InputSelect name="industry Preference" id='industry Preference' />
                    </div>
                    <div className='  w-full md:w-[393px] '>
                        <InputSelect name="Reason to join" id='Reason to join' />
                    </div>
                    <div className='  w-full md:w-[393px] '>
                        <InputSelect name="How did you hear about us?" id='How did you hear about us?' />
                    </div>

                    <div className='flex w-full md:w-[393px]'>
                        <button className='text-white bg-primary w-full p-3 hover:opacity-85'>Join CorpFin Hub</button>
                    </div>
                    <p className='absolute bottom-12'>
                        <span className='text-[#A8A8A8] text-[12px]'>Copyright © 2024 All Rights Reserved</span>

                    </p>
                </div>


            </div>
        </section>
    )
}

export default SignBusinessDetails