import styled from 'styled-components';

export const AccountsWrapper = styled.div`
width: 1200px;
height: 800px;
margin: 20px;
`;

export const AddWalletSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px;
border-bottom: 1px solid rgb(6, 6, 6);
padding-bottom: 10px;
`;

export const AddWallet = styled.div`
font-size: 16px;
line-height: 16px;
margin-right: 20px;
cursor: pointer;
transition: 0.5s;
width: 150px;
height: 30px;
border-radius: 10px;
color: #000;
text-align: center;
padding-top: 10px;

&:hover{
    transform: translate(1.5);
    color: rgb(255, 255, 255);
    background: #000;
}
`;

export const AccountsSection = styled.div`
display: flex;
flex-wrap: wrap;
`;

