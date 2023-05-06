import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/HeroSection'
import Highlight from './components/Highlight'
import CustomersReviews from './components/CustomersReviews'
import ArtistsReview from './components/ArtistsReview'
import AboutUsSmall from './components/AboutUsSmall'
import Footer from './components/Footer'

function index() {
  return (<>
    <Nav />
    <HeroSection />
    <Highlight />
    <CustomersReviews />
    <ArtistsReview />
    <AboutUsSmall />
    <Footer />
  </>
  )
}

export default index
