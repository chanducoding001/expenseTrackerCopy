import React from 'react'
import SingleTransaction from './SingleTransaction';
import { recentTransactionsData } from '../../../app/utils';

const RecentTransactionContainer = () => {

  
  return (
    <>
    <div className='recent-transaction-heading'>
      <h4 className='recent-transaction-heading-text'>Recent Transaction</h4>
      <button className='recent-transaction-button'>See All</button>
    </div>
    {
      recentTransactionsData.map((purchase,index)=>{
        return <SingleTransaction key={index}
        icon={purchase.icon} 
        title={purchase.title} 
        text = {purchase.text}
        spent = {purchase.spent}
        dateTime = {purchase.dateTime}
        />
      })
    }
    </>
  )
}

export default RecentTransactionContainer;