import React from 'react'
import Nav from '../components/Nav'
import HeroSection from '../components/HeroSection'
import Highlight from '../components/Highlight'
import CustomersReviews from '../components/CustomersReviews'
import ArtistsReview from '../components/ArtistsReview'
import AboutUsSmall from '../components/AboutUsSmall'
import Footer from '../components/Footer'
import TopPicks from '../components/TopPicks'

export default function Home() {
  return (
    <>
      <HeroSection />
      <TopPicks />
      <Highlight />
      <CustomersReviews />
      <ArtistsReview />
      <AboutUsSmall />
      <Footer />
    </>
  )
}
