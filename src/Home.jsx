import React from 'react'
import Head from './Components/Head/Head'
import Banner from './pages/Banner/Banner'
import Services from './pages/services/Services'
import Discover from './pages/Discover/Discover'
import Card from './Components/Card/Card'
import Footer from './pages/Footer/Footer'

function Home() {
  return (
    <div>
        <Head/>
        <Banner/>
        <Services/>
        <Discover/>
        <Card/>
        <Footer/>
    </div>
  )
}

export default Home