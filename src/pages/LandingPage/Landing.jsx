import React from 'react'
import HeroSection from './HeroSection'
import NavBar from './NavBar'
import AboutSection from './AboutSection'
import KeyFeaturesSection from './KeyFeaturesSection'
import PricingSection from './PricingSection'
import Footer from './Footer'

export const Landing = () => {
    return (
        <div className='text-black bg-black flex flex-col -z-20'>
            <NavBar />
            <HeroSection />
            <KeyFeaturesSection />
            <PricingSection />
            <AboutSection />
            <Footer />
        </div>
    )
}
