import React from 'react';

import Accounts from './accounts';
import Header from './layout/header';
import SideBar from './layout/sideBar';

function App() {
  return (
    <>
      <Header />
      <div className='d-flex'>
        <SideBar />
        <Accounts />
      </div>
    </>
  );
}

export default App;
