import styled from 'styled-components';

export const WalletWrapper = styled.div`
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

export const Container = styled.div`
width: 200px;
color: white;
`;

export const Title = styled.div`
margin-left: 10px;
margin-top: 15px;
display: flex;
align-items: center;
justify-content: start;
column-gap: 10px;
`;

export const WalletIMG = styled.img`
width: 34px;
height: 34px;
`;

export const WalletName = styled.span`
font-weight: 400;
font-size: 14px;
line-height: 14px;
color: #9AA5B1;
`

export const WalletBalance = styled.h4`
margin: 10px 5px 0 10px;
font-size: 16px;
line-height: 16px;
`;

export const WalletCryptoName = styled.h4`
margin-top:10px;
font-size: 16px;
line-height: 16px;
`;

export const Arrow = styled.img`
width: 20px;
height: 20px;
position: absolute;
right: 30px;
bottom: 30px;
`;
