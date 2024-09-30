import React from 'react'
import Header from '../../components/Header'
import MidmarketLandingPageHero from '../../components/MidmarketLandingPageHero'
import MidmarketLandingPageDetails from '../../components/MidmarketLandingPageDetails'
import Footer from '../../components/Footer'

const MidMarketLandingPage = () => {
    return (
        <section className='w-full min-h-screen'>
            <Header />
            <MidmarketLandingPageHero image={'/hero-midmarker-landingpage.png'} />
            <MidmarketLandingPageDetails />
            <Footer />
        </section>
    )
}

export default MidMarketLandingPage