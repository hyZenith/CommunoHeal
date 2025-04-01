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


const App = () => {

  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Root />}/>
          <Route path='/LandingPage' exact element={ <LandingPage />}/>
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
    <Navigate to='/HomePage'/> 
    //  We can use this for MainPage
  ): (
    <Navigate to='/Login'/>
    // instead of login we can use Landing page
  ); 
}
