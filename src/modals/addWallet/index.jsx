import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from 'styled-components';
import Swal from "sweetalert2";
import Loader from "../../components/shared/Loader";

export default function AddWalletModal({ isOpen, setModalIsOpen, getNewData, setGetNewData }) {
    const [selectedWallet, setSelectedWallet] = useState('Stellar');
    const [sendServerWalletName, setSendServerWalletName] = useState([])
    const [isLoaded, setIsLoaded] = useState(true)
    const [getDataAgain, setGetDataAgain] = useState(false)

    function errorAlert() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: "try Again"
        }).then(() => {
            setGetDataAgain(!getDataAgain)
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:3090/wallets`).then((res) => {
            setSendServerWalletName(res.data)
            setIsLoaded(false);
        }).catch((err) => {
            console.log(err);
            errorAlert()
        });
    }, [selectedWallet, getDataAgain])

    const sendDatatoServer = () => {
        let filteredWallet = sendServerWalletName.filter((i) => i.name === selectedWallet)
        let filteredWalletOBJ = (filteredWallet[0].currency)
        try {
            axios({
                method: 'post',
                url: 'http://localhost:3090/accounts',
                headers: {},
                data: { 'currency': filteredWalletOBJ, }
            });
            setGetNewData(!getNewData);
            setModalIsOpen(false);
        } catch (err) {
            console.log(err);
        }
    }

    const changeFruit = (newSelect) => {
        setSelectedWallet(newSelect)
    }

    return (isOpen &&
        <AddWalletWrapper>
            <ModalInfo>
                <TitleBox>
                    <h3>Add new wallet</h3>
                    <CloseModal onClick={() => setModalIsOpen(false)}> X </CloseModal>
                </TitleBox>
                <TitleInfo>
                    The crypto wallet will be created instantly and be available in your list of wallets.
                </TitleInfo>
                <div>
                    {isLoaded ? <Loader />
                        : <form >
                            <SelectItems onChange={(event) => changeFruit(event.target.value)} value={selectedWallet}>
                                <option value="Stellar">Stellar</option>
                                <option value="Litecoin">Litecoin</option>
                                <option value="SureRemit">SureRemit</option>
                                <option value="Tether">Tether</option>
                                <option value="Ripple">Ripple</option>
                                <option value="Dogecoin">Dogecoin</option>
                                <option value="TRON">TRON</option>
                            </SelectItems>
                        </form>
                    }
                </div>
                <D_Flex>
                    <CreatedBtn onClick={sendDatatoServer}>
                        Created
                    </CreatedBtn>
                </D_Flex>
            </ModalInfo>
        </AddWalletWrapper>
    )
}

const AddWalletWrapper = styled.div`
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
animation-name: slowmation;
animation-duration: 2s;
`;

const ModalInfo = styled.div`
width: 440px;
height: 100%;
max-width: 100%;
background: #ffffff;
overflow-y: auto;
padding: 20px;
padding-top: 80px;
`;

const TitleBox = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;

const TitleInfo = styled.div`
font-family: 'Aribau Grotesk';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 26px;
`;

const CloseModal = styled.button`
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

const SelectItems = styled.select`
margin-top: 40px;
width: 100%;
height: 50px;
font-family: 'Aribau Grotesk';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 16px;
`;

const D_Flex = styled.div`
margin-top: 150px;
display: flex;
justify-content: center;
`;

const CreatedBtn = styled.button`
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
