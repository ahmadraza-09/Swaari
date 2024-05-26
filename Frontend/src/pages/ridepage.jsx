import React from 'react'
import Header from '../components/header'
import DesktopFooter from '../components/desktopfooter'
import MobileFooter from '../components/mobilefooter'

const RidePage = () => {
  return (
    <>
    {<Header/>}
      This is Ride Page
    {<DesktopFooter/>}
    {<MobileFooter/>}
    </>
  )
}

export default RidePage
