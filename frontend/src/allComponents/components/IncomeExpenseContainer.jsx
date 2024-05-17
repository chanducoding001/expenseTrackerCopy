import React from 'react'
import AccountBalance from './IncomeExpenseContainer/AccountBalance';
import BalanceComponent from '../reusables/BalanceComponent';
import IosShareIcon from '@mui/icons-material/IosShare'; //upside icon
import SystemUpdateAltIcon from '@mui/icons-material/SystemUpdateAlt'; //downward icon
const IncomeExpenseContainer = () => {
  return (
    <>
    <div className='carousel-container home-account-container' >
            <AccountBalance/>
            <div className='balance-container'>
            <BalanceComponent icon={<IosShareIcon style={{height:'100px', width:'100px'}}/>} text='Income' amount='$5000' bgColor='green'/>
            <BalanceComponent icon={<SystemUpdateAltIcon style={{height:'100px', width:'100px'}}/>} text='Expenses' amount='$12000' bgColor='red'/>
            </div>
    </div>
    </>
  )
}

export default IncomeExpenseContainer;