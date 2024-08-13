import React from 'react'
import Header from '../components/header'
import DesktopFooter from '../components/desktopfooter'
import MobileFooter from '../components/mobilefooter'
import Ride from '../components/ride'

const RidePage = () => {
  return (
    <>
    {<Header/>}
    {<Ride/>}
    {<DesktopFooter/>}
    {<MobileFooter/>}
    </>
  )
}

export default RidePage
