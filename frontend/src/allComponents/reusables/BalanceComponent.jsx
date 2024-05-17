import React from 'react'
import './reUsableStyles.css';
const BalanceComponent = (props) => {

    const {icon,text,amount,bgColor} = props;

  return (
    
    <div className='balanceComponent carousel-container' style={{backgroundColor:bgColor}}>
      <div>{icon}</div>
      <div>
        <h4 className='money-text'>{text}</h4>
        <h3 className='money-money'>{amount}</h3>
      </div>
    </div>
)
}

export default BalanceComponent;