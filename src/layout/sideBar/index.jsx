import React from "react";
import styled from 'styled-components';

import "./style.scss"

const sidebarData = ['Wallets', 'Prices', 'Peer2Peer', 'Activity', 'Settings']

export default function SideBar() {
    return (
        <SideBarWrapper>
            <SidebarContent>
                {
                    sidebarData.map((item) => {
                        return (
                            <MenuBar>
                                {item}
                            </MenuBar>
                        )
                    })
                }
            </SidebarContent>
        </SideBarWrapper>
    )
}

const SideBarWrapper = styled.div`
width: 400px;
height: 800px;
display: flex;
justify-content: flex-end;
`;

const SidebarContent = styled.div`
margin-top: 30px;
width: 300px;
height: 700px;
`;

const MenuBar = styled.div`
display: flex;
align-items: center;
height: 44px;
padding-left: 15px;
transition: .5s;
&:hover{
    background: rgb(0, 0, 0);
    color: rgb(255, 251, 251);
}
`;
