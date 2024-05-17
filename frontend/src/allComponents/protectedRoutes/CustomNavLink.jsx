import React from 'react'
import {NavLink, useMatch } from 'react-router-dom';
const CustomNavLink = ({to,children}) => {

    const match = useMatch ({
        path:to,
        caseSensitive: false,
        end:true
    })
  return (
    <>
    <NavLink
      to={to}
      className={match ? 'activeLink' : 'normalLink'}
      style={{width:'100%',textDecoration:'none'}}
    >
      {children}
    </NavLink>
    </>
  )
}

export default CustomNavLink;