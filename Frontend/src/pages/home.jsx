import React from 'react'
import Header from '../components/header'
import Hero from '../components/hero'
import DriversCardsFeed from '../components/driverscardsfeed'
import DesktopFooter from '../components/desktopfooter'
import MobileFooter from '../components/mobilefooter'

const Home = () => {
  return (
    <>
      {<Header/>}
      {<Hero/>}
      {<DriversCardsFeed/>}
      {<DesktopFooter/>}
      {<MobileFooter/>}
    </>
  )
}

export default Home
