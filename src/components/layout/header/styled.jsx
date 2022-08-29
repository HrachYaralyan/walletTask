import styled from 'styled-components';

export const HeaderWrapper = styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content:center;
padding-top: 10px;
`;

export const LogoAdnUserSection = styled.div`
width:90%;
display: flex;
justify-content:space-between;
`

export const LogoSolicy = styled.div`
width:85px
heigh:30px
`;

export const UserName = styled.div`
width:85px
heigh:15px
`;

export const Photo = styled.img.attrs(props => ({
  src: props.src
}))`
  width: 100%;
  `;