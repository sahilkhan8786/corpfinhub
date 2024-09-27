import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div className='flex items-center justify-center gap-4 flex-col h-screen'>

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
    )
}

export default Home