import React from 'react';
import logo from '../assets/logo.svg';
import camp from '../assets/camp.svg';
import data from '../assets/data.svg';
import analytics from '../assets/analytics.png';
import insight from '../assets/insight.svg';
import exp from '../assets/wxp.svg';
import user from '../assets/user.png';
import setting from '../assets/setting.svg';
import swi from '../assets/switch.svg';
import bug from '../assets/bug.svg';

export default function Sidebar() {
  return (
    <div className="container">
      <div className="pt-5 logo text-white">
        <img src={logo} alt="logo" />
        <span className="fs-6 p-1 fw-bold">Quest</span>
      </div>
      <div className="secondiv">
        <div>
          <img src={camp} alt="camp" />
          <span className="p-3">Campaigns</span>
        </div>
        <div>
          <img src={data} alt="data" />
          <span className="p-3">Data</span>
        </div>
        <div>
          <img
            className="white sat"
            src={analytics}
            width="15px"
            height="15px"
            alt="analytics"
          />
          <span className="text-white p-3">Analytics</span>
        </div>
        <div>
          <img src={insight} alt="insights" />
          <span className="p-3">Insights</span>
        </div>
        <div>
          <img src={exp} alt="experiences" />
          <span className="p-3">Experiences</span>
        </div>
        <div>
          <img src={user} width="15px" height="15px" alt="audience" />
          <span className="sat p-3">Audience</span>
        </div>
        <div>
          <img src={setting} alt="settings" />
          <span className="p-3">Settings</span>
        </div>
        <div className="lastdiv">
          <div>
            <img src={swi} alt="switch" />
            <span className="p-3">Switch</span>
          </div>
          <div>
            <img src={bug} alt="bug" />
            <span className="p-3">Report a bug</span>
          </div>
        </div>
      </div>
    </div>
  );
}
