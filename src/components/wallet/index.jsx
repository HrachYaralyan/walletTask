import React from "react";

import arrow from '../../resources/pictures/arrow.png'
import img from '../../resources/pictures/walletBg.png'
import { DisplayFlex } from '../../App'

import { WalletWrapper, Container, Title, WalletIMG, WalletName, WalletBalance, WalletCryptoName, Arrow } from './styled'

export default function Wallet({ item }) {
    return (
        <>
            <WalletWrapper img={img} >
                <Container>
                    <Title>
                        <WalletIMG src={item.imgURL} />
                        <WalletName>{item.name}</WalletName>
                    </Title>
                    <DisplayFlex>
                        <WalletBalance>{item.balance}</WalletBalance> <WalletCryptoName>{item.currency}</WalletCryptoName>
                    </DisplayFlex>
                </Container>
                <Arrow src={arrow} alt="arrow" />
            </WalletWrapper>
        </>
    )
}
