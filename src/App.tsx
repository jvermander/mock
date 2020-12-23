import React from 'react';
import Navbar from './components/Navbar';
import {AdCarousel, SignUpAd} from './components/Ads';
import {ListInfo} from './components/ListInfo'

export default function App() {
  return (
    <div className='container-fluid p-0 m-0'>
      <Navbar/>
      <AdCarousel/>
      <ListInfo/>
      <SignUpAd/>
    </div>
  );
}