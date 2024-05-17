import React from 'react';
import './componentsStyles.css';
import { recentTransactionsData } from '../../app/utils';
import CreateTransaction from './createExpenses/CreateTransaction';
import SingleTransaction from './recentTransactionContainer/SingleTransaction';

const Transaction = () => {
  return (
    <div className='layout-dynamic-height layout-bg-color'>
      <h4 className='heading-title'>All Transactions</h4>
      <div className='make-center'>
      {recentTransactionsData?.map((purchase,index)=>{
        return <SingleTransaction key={index}
        icon={purchase.icon} 
        title={purchase.title} 
        text = {purchase.text}
        spent = {purchase.spent}
        dateTime = {purchase.dateTime}
        />
      })}
      </div>
    </div>
  )
}

export default Transaction;