import React from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import FAQCARDS from '../../components/FAQCARDS'

const FAQ = () => {
    return (
        <section>
            <Header />
            <div className="w-full h-[70vh] relative">
                <article className={`relative flex flex-col text-white justify-center h-full w-full bg-[#D8D8D8] bg-cover bg-center px-3 md:px-0 `}>
                    <div className="max-w-[1440px] mx-auto flex flex-col gap-8 w-full px-2 items-start justify-end  h-full " >
                        <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1440px] flex  gap-4'>
                            <article className='flex bg-white items-center p-4 gap-4 w-full'>
                                <img src="/fi_search.png" alt="" />
                                <input type="text" placeholder='Search by anything...' className='w-full bg-transparent' />
                            </article>
                            <button className='bg-primary px-6'>Search</button>
                        </div>


                        <h1 className='  bg-white text-black font-semibold text-[72px] px-2 pr-16   text-left'>Find Answers</h1>
                    </div>
                </article>
            </div>
            <div className='flex flex-col w-full max-w-[1440px] mx-auto my-16'>
                <article className='flex gap-10'>
                    <p className='bg-primary text-white px-4 py-3 cursor-pointer hover:bg-primary hover:text-white'>Account</p>
                    <p className=' px-4 py-3 cursor-pointer hover:bg-primary hover:text-white'>Mid-Market</p>
                    <p className=' px-4 py-3 cursor-pointer hover:bg-primary hover:text-white'>Early-Stage Business</p>

                </article>
            </div>
            <div className='w-full max-w-[1440px] mx-auto my-6 flex gap-12 '>
                <article>
                    <ul className='flex flex-col gap-3'>
                        <li className='hover:text-primary cursor-pointer whitespace-nowrap'>Create Account</li>
                        <li className='hover:text-primary cursor-pointer text-primary whitespace-nowrap'>Subscription</li>
                        <li className='hover:text-primary cursor-pointer  whitespace-nowrap'>Business Listing</li>
                    </ul>
                </article>
                <article className='w-full'>
                    <FAQCARDS />
                </article>
            </div>

            <div className='bg-[#F8F8F8] py-16'>

                <div className='flex w-full max-w-[1440px] mx-auto my-16  gap-12'>
                    <article >
                        <h1 className='font-semibold text-[50px] text-[#0D0D0D]'>Questions?
                            <br />
                            We’re here to help
                        </h1>
                        <form className='flex items-center justify-center  w-[848px] my-12 flex-col gap-12'>
                            <div className='w-full flex justify-between items-center gap-4'>
                                <input type="text" placeholder='Your Name' className=' outline-none focus:outline-none border-b  flex-1 bg-transparent' />
                                <input type="email" placeholder='Your Email'
                                    className=' outline-none focus:outline-none border-b  flex-1 bg-transparent' />
                            </div>
                            <div className='w-full flex justify-between items-center gap-4'>
                                <select type="number" placeholder='' className=' outline-none focus:outline-none border-b  flex-1 text-[#6A6A6A] bg-transparent'>
                                    <option value="You registered as?">
                                        You registered as?
                                    </option>
                                </select>
                                <input type="numer" placeholder='Phone Number'
                                    className=' outline-none focus:outline-none border-b  flex-1 bg-transparent' />
                            </div>
                            <div className='w-full flex'>
                                <textarea name="" id="" rows={5} className=' outline-none focus:outline-none border-b  flex-1 bg-transparent' placeholder='Your Message '></textarea>
                            </div>
                            <div className='w-full flex items-center justify-start'>
                                <button className='uppercase bg-primary py-4 px-6 text-white font-bold text-[17px]'>submit now</button>

                            </div>
                        </form>
                    </article>
                    <article className='bg-[#D8D8D8] w-full'></article>
                </div>
            </div>
            <Footer />
        </section>
    )
}

export default FAQ