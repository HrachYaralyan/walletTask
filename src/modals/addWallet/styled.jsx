import styled from 'styled-components';

export const AddWalletWrapper = styled.div`
position: fixed;
height: 100vh;
width: 100%;
background-color: rgba(0, 0, 0, 0.4);
top: 0;
right: 0;
bottom: 0;
left: 0;
z-index: 999;
display: flex;
justify-content: flex-end;
`;

export const ModalInfo = styled.div`
width: 440px;
height: 100%;
max-width: 100%;
background: #ffffff;
overflow-y: auto;
padding: 20px;
padding-top: 80px;
`;

export const TitleBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

export const TitleInfo = styled.div`
font-family: 'Aribau Grotesk';
font-weight: 400;
font-size: 18px;
line-height: 26px;
`;

export const CloseModal = styled.button`
background: white;
font-weight: 700;
font-size: 18px;
transition: 0.5s;

&:hover {
  transform: rotate(180deg);
  background: black;
  color: #ffffff;
}
`;

export const Title = styled.h4`
font-size: 24px;
line-height: 32px;
`

export const SelectItems = styled.select`
margin-top: 40px;
width: 100%;
height: 50px;
font-family: 'Aribau Grotesk';
font-weight: 400;
font-size: 16px;
line-height: 16px;
`;

export const D_Flex = styled.div`
margin-top: 150px;
display: flex;
justify-content: center;
`;

export const CreatedBtn = styled.button`
background: #000000;
border-radius: 40px;
display: flex;
flex-direction: row;
align-items: flex-start;
padding: 18px 54px;
gap: 10px;
cursor: pointer;
color: #ffffff;
}
`;
