import React from "react";
import styled from 'styled-components';
import Logo from '../../resources/pictures/logo.png'
import userInfo from '../../resources/pictures/jacob.png'

export default function Header() {
    return (
        <HeaderWrapper>
            <LogoSolicy>
                <Photo src={Logo} alt="" />
            </LogoSolicy>
            <UserName>
                <Photo src={userInfo} alt="" />
            </UserName>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content:space-between;
padding-top: 10px;
`;

const LogoSolicy = styled.div`
padding-left: 100px;
`;

const UserName = styled.div`
padding-right: 100px;
`;

const Photo = styled.img.attrs(props => ({
    src: props.src 
  }))`
  width: 100%;
  `;
