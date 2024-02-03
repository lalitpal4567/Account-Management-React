import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../containers/homepage/Homepage'
import RegistrationPage from '../containers/registrationPage/RegistrationPage'
import LoginPage from '../containers/loginPage/LoginPage'
import UserAccountDetails from '../containers/UserAccountDetails'

const AppNavigation = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Homepage/>}></Route>
                <Route path="/signUp" element={<RegistrationPage/>}></Route>
                <Route path="/signIn" element={<LoginPage/>}></Route>
                <Route path="/userDetails/:id" element={<UserAccountDetails/>}></Route>
            </Routes>
        </>
    )
}

export default AppNavigation
