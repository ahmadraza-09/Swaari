import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home'
import ProfilePage from './pages/profilepage'
import RidePage from './pages/ridepage'
import SearchRide from './pages/searchride'
import LoginPage from './pages/loginpage'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/profile' element={<ProfilePage/>}/>
          <Route path='/ride' element={<RidePage/>}/>
          <Route path='/searchride' element={<SearchRide/>}/>
          <Route path='/login' element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
