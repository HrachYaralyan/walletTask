import React from "react";

import Logo from '../../../resources/pictures/logo.png'
import userInfo from '../../../resources/pictures/jacob.png'

import { HeaderWrapper, LogoAdnUserSection, LogoSolicy, UserName, Photo } from './styled'

export default function Header() {
    return (
        <HeaderWrapper>
            <LogoAdnUserSection>
                <LogoSolicy>
                    <Photo src={Logo} alt="Solicy" />
                </LogoSolicy>
                <UserName>
                    <Photo src={userInfo} alt="user" />
                </UserName>
            </LogoAdnUserSection>
        </HeaderWrapper>
    )
}
