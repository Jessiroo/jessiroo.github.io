import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';

// import Backdrop from '../Layout/Backdrop';
import Navbar from '../Layout/Navbar';

const RootLayout = () => {  
  return (
    <Fragment >
      <Navbar />
      <Outlet />
      {/* <Backdrop /> */}
    </Fragment>
  );
};

export default RootLayout;