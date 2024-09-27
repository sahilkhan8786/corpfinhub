import React from 'react'
import { signUpList, signUpOptionsList } from '../../constant'
import InputBox from '../../components/InputBox'
import InputPhone from '../../components/inputPhone'

const SignUp = () => {
    return (
        <section className='bg-primary w-full min-h-screen flex flex-col '>
            <div className=' flex w-full flex-col   md:flex-row'>
                {/* LEFT */}
                <div className='text-white flex-1 flex items-center justify-center flex-col md:relative mt-8 md:mt-0 px-3 md:px-0'>
                    <h1 className='font-semibold text-4xl md:text-[48px] leading-tight w-full md:w-[360px]'>Create an account</h1>
                    <p className='text-[14px] w-full md:w-[360px]'>We provide lorem ipsum team dolor sit amet, consectetur adipiscing performance.</p>
                    <div className='flex flex-col gap-5 mt-8'>
                        {signUpList.map(list => (
                            <article key={list.id} className='flex items-start gap-5'>
                                <img src={list.icon} alt={list.heading} className='object-contain' />
                                <div>
                                    <h3 className='font-medium text-[14px]'>{list.heading}</h3>
                                    <p className='text-[14px] font-light opacity-80'>{list.description}</p>
                                </div>
                            </article>

                        ))}
                    </div>

                    <p className='md:absolute md:bottom-12 my-6 md:my-0'>Having troubles?
                        <span className='underline px-1 cursor-pointer'>Get Help</span>

                    </p>
                </div>

                {/* RIGHT */}
                <div className='bg-white  flex-1 rounded-tl-3xl  md:rounded-bl-3xl rounded-tr-3xl flex justify-center items-center flex-col gap-8   w-full px-4 md:px-0 md:w-[393px] relative h-screen py-12 md:py-0'>
                    <div className='  w-full md:w-[393px] '>
                        <InputBox label="Email address" name='email' />
                    </div>
                    <div className=' w-[100%] md:w-[393px] flex gap-3'>
                        <InputBox label="First name" name='First name' />
                        <InputBox label="Last name" name='Last name' />
                    </div>
                    <div className='  w-full md:w-[393px]  '>
                        <InputPhone label="Phone number" name='Phone number' />

                    </div>
                    <div className='  w-full md:w-[393px]  '>
                        <InputBox label="Password" name='Password' />
                    </div>
                    <div className='flex w-full md:w-[393px]'>
                        <button className='text-white bg-primary w-full p-3 hover:opacity-85'>Sign Up</button>
                    </div>

                    <div className='  w-full md:w-[393px] text-center'>
                        <h3 className='text-[#202020] font-medium text-[14px]' >Sign up with</h3>
                        <article className='  w-full md:w-[393px] flex items-center justify-between mt-6 flex-wrap mb-6 gap-2'>
                            {
                                signUpOptionsList.map(option => (
                                    <div key={option.id} className='flex items-center gap-5 border p-3 hover:bg-gray-200 cursor-pointer  min-w-[120px]w-full flex-1 '>
                                        <img src={option.icon} alt={option.label} />
                                        <p >{option.label}</p>
                                    </div>
                                ))
                            }

                            <div className='flex gap-4 px-3 text-left font-normal text-[12px] text-[#84818A] mt-6'>
                                <input type="checkbox" />
                                <p>By clicking Create account, I agree that I have read and accepted the Terms of Use and Privacy Policy.</p>
                            </div>
                            <p className='text-[14px] font-medium flex items-center justify-center w-full mt-6 flex-col sm:flex-row'>Already have a CorpFin Hub account?
                                <span className='text-primary hover:cursor-pointer hover:underline'>Sign In</span>
                            </p>
                        </article>
                    </div>
                    <p className='absolute bottom-12'>
                        <span className='text-[#A8A8A8] text-[12px]'>Copyright © 2024 All Rights Reserved</span>

                    </p>
                </div>

            </div>
        </section>
    )
}

export default SignUp