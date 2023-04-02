import React from 'react';
import round from '../assets/round.svg';

export default function Card({ text, sub }) {
  return (
    <div className="card">
      <div className='d-flex'>
        <div className='cardImage'>
        <img width="40px" height="40px" src={round} alt="round" />
        </div>
        <div className='innercard'>
        <p className="fs-3 fw-700 text-white">{text}</p>
        <p className='cardsub'>{sub}</p>
      </div>
      </div>
    </div>
  );
}
