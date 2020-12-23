import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-sm'>
      <a className='navbar-brand' href='#'>
        <div>MiMobl</div>
        <div style={{fontSize: '12px'}}>Your time. Your location.</div>
      </a>
      <div className='navbar-nav ml-auto' style={{fontFamily: 'larke', fontSize: '20px', color: '#6170a1'}}>
        <a className='nav-link p-3' href="#">Our Solutions</a>
        <a className='nav-link p-3' href="#">Contact Us</a>
        <a className='nav-link p-3' href="#">FAQ</a>
        <a className='nav-link p-3' href="#">About</a>
        <a className='nav-link p-3' href="#">Careers</a>
      </div>
    </nav>
  );
}
