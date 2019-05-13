import React from 'react';
import { Link } from 'react-router-dom';
import { Parent, Child } from './styles'

const Header = ({ children }) => {
  return (
    <div>
      <Parent>
        <Child><Link to='/'>[home]</Link></Child>
        <Child><Link to='/threeday'>[three day forecast]</Link></Child>
        <Child><Link to='/fiveday'>[five day forecast]</Link></Child>
      </Parent>
    {children}
    </div>
  )
};

export default Header;