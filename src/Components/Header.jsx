import React from 'react';

// css for header
import '../assets/css/header.css';

import logo from '../assets/img/cassette-logo.png'


function Header() {
  return (
    <header className='w-100 p-2 row m-0'>
      <div className='col d-flex align-items-center justify-content-start'>
        <img src={logo} alt="cassette logo" className='logo' />
        <h1>Cassette</h1>
      </div>
    </header>
  )
}

export default Header