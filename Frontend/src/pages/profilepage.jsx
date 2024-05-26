import React from 'react'
import Header from '../components/header'
import DesktopFooter from '../components/desktopfooter'
import MobileFooter from '../components/mobilefooter'
import Profile from '../components/profile'

const ProfilePage = () => {
  return (
    <>
    {<Header/>}
    {<Profile/>}
    {<DesktopFooter/>}
    {<MobileFooter/>}
    </>
  )
}

export default ProfilePage
