import React from 'react'
import Header from '../components/UI/Header'
import Main from '../components/UI/Main'
import Features from '../components/UI/Features'
import Footer from '../components/UI/Footer'
import HowItWorks from '../components/UI/HowItWorks'
import AboutUs from '../components/UI/AboutUs'
import Contact from '../components/UI/Contact'

const HomePage = () => {
  return (
    <>
        <Header/>
        <Main/>
        <Features/>
        <HowItWorks/>
        <AboutUs/>
        <Contact/>
        <Footer/>
    </>
  )
}

export default HomePage