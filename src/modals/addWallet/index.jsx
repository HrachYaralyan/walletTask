import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Loader from "../../components/shared/Loader";

import { AddWalletWrapper, ModalInfo, TitleBox, Title, TitleInfo, CloseModal, SelectItems, D_Flex, CreatedBtn } from './styled'

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

    const sendDataToServer = () => {
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
                    <Title>Add new wallet</Title>
                    <CloseModal onClick={() => setModalIsOpen(false)}> X </CloseModal>
                </TitleBox>
                <TitleInfo>
                    The crypto wallet will be created instantly and be available in your list of wallets.
                </TitleInfo>
                {isLoaded
                    ? <Loader />
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
                <D_Flex>
                    <CreatedBtn onClick={sendDataToServer}>
                        Created
                    </CreatedBtn>
                </D_Flex>
            </ModalInfo>
        </AddWalletWrapper>
    )
}
