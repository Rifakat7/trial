import React from 'react';
import Sidebar from './Sidebar';
import Card from './Card';
import Navbar from './Navbar';


export default function Analytics() {
  const cardData = [
    {
      id: 1,
      title: '4898 hours',
      sub: 'Total time spent in last 7 days',
    },
    {
      id: 2,
      title: '$334,321',
      sub: 'Total store purchases in 7 days',
    },
    {
      id: 3,
      title: '9764',
      sub: 'Weekly Active Game Users',
    },
    {
      id: 4,
      title: '9845',
      sub: 'Tweet likes in last 7 days',
    },
    {
      id: 5,
      title: '10470',
      sub: 'Discord messages in last 7 days',
    },
    {
      id: 6,
      title: '1304',
      sub: 'Contract transactions in last 7 days',
    },
  ];
  return (
    <div className="main-container">
      <div className="d-flex">
        <div className="sidenav">
          <Sidebar />
        </div>
        <div className="other-half">
          <Navbar />
          <div className="card-container">
            {cardData.map((e) => {
              return (
                <div key={e.id}>
                  <Card text={e.title} sub={e.sub} />
                </div>
              );
            })}
          </div>
        
          
        </div>
      </div>
    </div>
  );
}
