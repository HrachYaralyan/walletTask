import React from 'react';

import Accounts from './pages/accounts';
import Header from './components/layout/header';
import SideBar from './components/layout/sideBar';

import styled from 'styled-components';

function App() {
  return (
    <>
      <Header />
      <DisplayFlex>
        <SideBar />
        <Accounts />
      </DisplayFlex>
    </>
  );
}

export const DisplayFlex = styled.div`
  display: flex;
`;

export const Tittle = styled.div`
  font-family: 'Aribau Grotesk';
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  margin-left: 20px;
`;

export default App;
