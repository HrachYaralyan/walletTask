import styled from 'styled-components';

export const SideBarWrapper = styled.div`
width: 300px;
height: 700px;

margin-left:50px;
margin-top: 30px;
`;

export const MenuBar = styled.div`
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