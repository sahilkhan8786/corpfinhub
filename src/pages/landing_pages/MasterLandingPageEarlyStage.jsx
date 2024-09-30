import React from 'react'
import Header from '../../components/Header'
import MidmarketLandingPageHero from '../../components/MidmarketLandingPageHero'
import MidmarketLandingPageDetails from '../../components/MidmarketLandingPageDetails'
import Footer from '../../components/Footer'

const MasterLandingPageEarlyStage = () => {
    return (
        <section className='w-full min-h-screen'>
            <Header />
            <MidmarketLandingPageHero image={'/master-landing-early-stage.png'} />
            <MidmarketLandingPageDetails />
            <Footer />
        </section>
    )
}

export default MasterLandingPageEarlyStage