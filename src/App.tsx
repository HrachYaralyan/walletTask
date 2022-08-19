import React from 'react';
import styled from 'styled-components';
import Accounts from './accounts';
import Header from './layout/header';
import SideBar from './layout/sideBar';

function App() {
  return (
    <>
      <Header />
      <Header />
      <DisplayFlex>
        <SideBar />
        <Accounts />
      </DisplayFlex>
    </>
  );
}

const DisplayFlex = styled.div`
  display: flex;
`;

export default App;
