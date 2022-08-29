import React from "react";

import { SideBarWrapper, MenuBar } from './styled'

const sidebarData = ['Wallets', 'Prices', 'Peer2Peer', 'Activity', 'Settings']

export default function SideBar() {
    return (
        <SideBarWrapper>
            {
                sidebarData.map((item) => (
                    <MenuBar>
                        {item}
                    </MenuBar>
                ))
            }
        </SideBarWrapper>
    )
}
