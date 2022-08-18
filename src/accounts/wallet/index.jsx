import React from "react";

import arrow from '../../resources/pictures/arrow.png'
import styled from 'styled-components';
import img from '../../resources/pictures/walletBg.png'
import "./style.scss"

export default function Wallet({ item }) {
    console.log(process.env.PUBLIC_URL + img, "dlsds;csdckm");
    return (
        <>
            <WalletWrapper img={img} >
                <Container>
                    <Title>
                        <div>
                            <WalletIMG src={item.imgURL} />
                        </div>
                        <h5>{item.name}</h5>
                    </Title>
                    <Balance>
                        <H4>{item.balance}</H4> <div>{item.currency}</div>
                    </Balance>
                </Container>
                <Arrow src={arrow} alt="" />
            </WalletWrapper>
        </>


    )
}

const WalletWrapper = styled.div`
background-image: url(${props => props.img});
background-size: cover;
background-position: 50% 50%;
background-repeat: no-repeat;
border-radius: 10px;
width: 240px;
height: 150px;
display: flex;
justify-content: center;
position: relative;
`;

const Container = styled.div`
width: 200px;
color: white;
`;

const Title = styled.div`
margin-left: 10px;
margin-top: 5px;
display: flex;
align-items: center;
justify-content: start;
column-gap: 10px;
`;

const Balance = styled.div`
display: flex;
`;

const WalletIMG = styled.img`
width: 34px;
height: 34px;
`;

const H4 = styled.h4`
margin: 0;
margin-right: 5px;
margin-left: 10px;
`;

const Arrow = styled.img`
width: 20px;
height: 20px;
position: absolute;
right: 30px;
bottom: 30px;
`;
