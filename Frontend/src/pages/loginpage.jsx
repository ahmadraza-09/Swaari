import React from 'react'
import Header from '../components/header'
import Login from '../components/login'
import DesktopFooter from '../components/desktopfooter'
import MobileFooter from '../components/mobilefooter'

const LoginPage = () => {
  return (
    <div>
      {<Header/>}
      {<Login/>}
      {<DesktopFooter/>}
      {<MobileFooter/>}
    </div>
  )
}

export default LoginPage
