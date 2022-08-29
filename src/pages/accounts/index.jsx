import React, { useEffect, useState } from "react";
import axios from 'axios';
import Swal from "sweetalert2";
import Wallet from "../components/wallet";
import AddWalletModal from "../modals/addWallet";
import Loader from "../components/shared/Loader";
import { Tittle } from "../App"

import { AccountsWrapper, AddWalletSection, AddWallet, AccountsSection } from "./styled"

export default function Accounts() {
    const [walletData, setWalletData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [getNewData, setGetNewData] = useState(false)
    const [isLoaded, setIsLoaded] = useState(true)

    const errorAlert = () => {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="/">try Again ?</a>'
        })
    }

    useEffect(() => {
        axios.get(`http://localhost:3090/accounts`).then((res) => {
            setWalletData(res.data)
            setIsLoaded(false);
        }).catch((err) => {
            console.log(err);
            errorAlert()
        });
    }, [getNewData])

    return (
        <AccountsWrapper>
            <AddWalletSection>
                <Tittle>Wallet</Tittle>
                <AddWallet onClick={() => setModalIsOpen(true)}> + Add new wallet </AddWallet>
            </AddWalletSection>
            <AccountsSection>
                {isLoaded
                    ? <Loader />
                    : walletData.map((item) => (
                        <Wallet key={item.id}
                            item={item}
                        />
                    ))
                }
            </AccountsSection>
            <AddWalletModal isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} getNewData={getNewData} setGetNewData={setGetNewData} />
        </AccountsWrapper>
    )
}
