import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex items-center justify-center gap-4  h-screen flex-wrap'>

            <div className='border border-black flex flex-col text-center p-4'>
                <h1 className='text-4xl'>OnBoarding Pages</h1>
                <Link to={'/sign-in'}>
                    Sign In
                </Link>
                <Link to={'/sign-up'}>
                    Sign Up
                </Link>
                <Link to={'/sign-up-completed'}>
                    Sign Up Completed
                </Link>
                <Link to={'/sign-peronal-details'}>
                    Sign Up Personal Details
                </Link>
                <Link to={'/sign-business-details'}>
                    Sign Up Business Details
                </Link>
                <Link to={'/forgot-password'}>
                    Forgot Password
                </Link>
                <Link to={'/reset-password'}>
                    Reset Password
                </Link>
                <Link to={'/maintenance'}>
                    Maintenance
                </Link>
                <Link to={'/not-found'}>
                    Not Found
                </Link>
                <Link to={'/desktop'}>
                    Desktop
                </Link>
            </div>
            <div className='border border-black flex flex-col text-center p-4'>
                <h1 className='text-4xl'>Midmarket seller</h1>

                <Link to={'/seller-listing-details'}>
                    Seller Listing Details Page
                </Link>
                <Link to={'/dashboard-seller'}>
                    Dashboard Seller
                </Link>
                <Link to={'/buyers-evaluation'}>
                    Buyers Evaulations
                </Link>
                <Link to={'/midmarker-seller-overview'}>
                    Mid Marker Seller Overview
                </Link>
            </div>

            <div className='border border-black flex flex-col text-center p-4'>
                <h1 className='text-4xl'>Start up seller seller</h1>
                <Link to={'/start-up-seller-listing-page'}>
                    Start Up Seller Listing Page
                </Link>
                <Link to={'/my-lisitng-start-up-seller'}>
                    My Listing Start Up Seller
                </Link>
                <Link to={'/start-up-seller-overview'}>
                    Start Up Seller Overview
                </Link>
                <Link to={'/evaluate-buyer-start-up-seller'}>
                    Evaluate Buyer Start Up Seller
                </Link>
                <Link to={'/evaluate-buyer-start-up-seller-response'}>
                    Evaluate Buyer Start Up Seller Response
                </Link>
                <Link to={'/response-popup'}>
                    Response Popup
                </Link>
            </div>

            <div className='border border-black flex flex-col text-center p-4'>
                <h1 className='text-4xl'>Landing pages</h1>

                <Link to={'/master-landing-page-early-stage'}>
                    Master Landing Page Early Stage
                </Link>
                <Link to={'/midmarket-landing-page'}>
                    Mid market Landing Page
                </Link>
            </div>



        </div>
    )
}

export default Home