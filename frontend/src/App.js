import React from 'react'
import SignUp from './allComponents/authentication/SignUp';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './allComponents/authentication/Login';
import AuthPage from './allComponents/authentication/AuthPage';
import ForgotPassword from './allComponents/authentication/ForgotPassword';
import ResetPassword from './allComponents/authentication/ResetPassword';
import VerifyOtp from './allComponents/authentication/VerifyOtp';
import ProtectedRoute from './allComponents/protectedRoutes/ProtectedRoute';
import Layout from './allComponents/layout/Layout';
import Transaction from './allComponents/components/Transaction';
import CreateExpense from './allComponents/components/createExpenses/CreateExpense';
import Profile from './allComponents/components/Profile';
import Budget from './allComponents/components/createBudget/Budget';
import AddNewAccount from './allComponents/components/AddNewAccount';
import AddNewWallet from './allComponents/components/AddNewWallet';
import Home from './allComponents/components/Home';
import CreateIncome from './allComponents/components/createExpenses/CreateIncome';
import CreateTransaction from './allComponents/components/createExpenses/CreateTransaction';
import NotificationsPage from './allComponents/components/NotificationsPage';
import ProfileAccount from './allComponents/components/profileAccount/ProfileAccount';
import ProfileSettings from './allComponents/components/profileAccount/ProfileSettings';
import ProfileDataExport from './allComponents/components/profileAccount/ProfileDataExport';

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<AuthPage/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/signUp' element={<SignUp/>}/>
      <Route path='/verifyOtp/:verifyEmail' element={<VerifyOtp/>}/>
      <Route path='/forgotPassword' element={<ForgotPassword/>}/>
      <Route path='/resetPassword/:otp' element={<ResetPassword/>}/>
      <Route element={<ProtectedRoute/>}>
        <Route path='/home' exact={true} element={<Layout/>}>
        <Route index element={<Home/>}/>
        <Route path='transaction' element={<Transaction/>}/>
        <Route path='createExpense' element={<CreateExpense/>}/>
        <Route path='createIncome' element={<CreateIncome/>}/>
        <Route path='createTransaction' element={<CreateTransaction/>}/>
        <Route path='profile' element={<Profile/>}/>
        <Route path='profileAccount' element={<ProfileAccount/>}/>
        <Route path='profileSettings' element={<ProfileSettings/>}/>
        <Route path='profileDataExport' element={<ProfileDataExport/>}/>
        <Route path='notifications' element={<NotificationsPage/>}/>
        <Route path='createBudget' element={<Budget/>}/>
        <Route path='addNewAccount' element={<AddNewAccount/>}/>
        <Route path='addNewWallet' element={<AddNewWallet/>}/>
        </Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;