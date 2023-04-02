import React from 'react';
import user from '../assets/user.svg';

export default function Navbar() {
  return (
    <div className="navdiv d-flex">
      <div>
        <p className='pt-2'>
          Quest / <span className="text-white">Insights</span>
        </p>
      </div>
      <div className="d-flex">
        <div className="user">Connect Wallet</div>
        <div className='px-4'> 
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  );
}
