import React from 'react'
import { Link } from 'react-router-dom'
import { MdSearch, MdShoppingBasket } from 'react-icons/md'
const Header = () => {
  return (
    <nav className='header'>
      <Link
        to='/'
        children={
          <img
            className='header__logo'
            src='http://pngimg.com/uploads/amazon/amazon_PNG11.png'
            alt='amazon logo'
          />
        }
      />

      <div className='header__search'>
        <input type='text' className='header__search-input' />
        <MdSearch className='header__search-icon' />
      </div>
      <div className='header__nav'>
        <Link to='/login' className='header__nav-link'>
          <div className='header__nav-option'>
            <span>Hi, Abdrr97</span>
            <span>Sign out</span>
          </div>
        </Link>
        <Link to='/' className='header__nav-link'>
          <div className='header__nav-option'>
            <span>Returns</span>
            <span>& Orders</span>
          </div>
        </Link>
        <Link to='/' className='header__nav-link'>
          <div className='header__nav-option'>
            <span>Your</span>
            <span>Prime</span>
          </div>
        </Link>
        <Link to='/checkout' className='header__nav-link'>
          <div className='header__nav-option-basket'>
            <MdShoppingBasket />
            <span>0</span>
          </div>
        </Link>
      </div>
    </nav>
  )
}

export default Header
