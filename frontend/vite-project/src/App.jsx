import React from 'react'

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'

import Login from "./pages/Auth/Login"
import SignUp from "./pages/Auth/SignUp"
import LandingPage from './pages//Dashboard/LandingPage'
import HomePage from './pages/Dashboard/HomePage'
import Transcript  from './pages/Dashboard/Transcript'
import VideoConnect from './pages/Dashboard/VideoConnect'
import Prescription from './pages/Dashboard/Prescription'
import Profile from './pages/Dashboard/Profile'


const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root />}/>
          <Route path='/Home' exact element={<HomePage />}/>
          <Route path='/HomePage' exact element={<LandingPage />}/>
          <Route path='/Profile' exact element={<Profile />}/>
          <Route path='/Prescription' exact element={<Prescription />}/>  
          <Route path='/Transcript' exact element={<Transcript />}/>
          <Route path='/VideoConnect' exact element={ <VideoConnect />}/>
          <Route path='login' exact element={ <Login />}/>          
          <Route path='SignUp' exact element={ <SignUp />}/>          
        </Routes>
      </Router>
    </div>
  )
}


export default App


// ** Future Update 

const Root  = () => {
//Check if token exist in localStorage
  const isAuthenticated = !!localStorage.getItem("token")
   
  //Redirect to dashboard if authenticated , otherwise to login
  return isAuthenticated ? (
    <Navigate to='/Home'/> 
    //  We can use this for MainPage
  ): (
    <Navigate to='/HomePage'/>
    // instead of login we can use Landing page
  ); 
}
