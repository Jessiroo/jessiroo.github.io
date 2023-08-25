import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

import Navbar from '../Layout/Navbar';

const RootLayout = () => {  
  return (
    <Fragment >
      <Navbar />
      <Outlet />
    </Fragment>
  );
};

export default RootLayout;