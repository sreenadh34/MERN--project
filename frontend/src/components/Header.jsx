import React from 'react';
import { FaSignInAlt, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className ="flex justify-between items-center py-5 border-b border-gray-300 mb-15">
      <div >
        <Link to='/'>GoalSetter</Link>
      </div>
      <ul>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
      </ul>
    </header>
  )
}

export default Header