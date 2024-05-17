import React from 'react'
import IncomeExpenseContainer from './IncomeExpenseContainer';
import SpendFrequencyContainer from './spentContainer/SpendFrequencyContainer';
import RecentTransactionContainer from './recentTransactionContainer/RecentTransactionContainer';

const Home = () => {
  
  return (
    <div className='layout-dynamic-height layout-bg-color make-center'>
    <IncomeExpenseContainer/>
    {/* <SpendFrequencyContainer/> */}
    <RecentTransactionContainer/>
    </div>
  )
}

export default Home;