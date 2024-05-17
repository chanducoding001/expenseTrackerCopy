import React from 'react'

const AccountBalance = () => {
    const months = ['January','Febrauary','March','April',
  'May','June','July','August','September','October','November','December'];
  return (
    <>
    <div className='account-balance-container'>
            <div>
                <select className='inputField'>
                <option defaultValue='Select Month'>Select Month</option>
                {months.map((e,i)=>{return <option key={i}>{e}</option>})}
                </select>
            </div>
            <div>
                <h4 className='money-text'>Account Balance</h4>
                <h2 className='money-money'>$9600</h2>
            </div>
    </div>
    </>
  )
}

export default AccountBalance;