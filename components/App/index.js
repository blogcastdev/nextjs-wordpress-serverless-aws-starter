import React from 'react';
import MainNav from '../MainNav';

export default ({ children }) => (
  <div className="site-wrap">
    <MainNav />
    {children}
  </div>
);
