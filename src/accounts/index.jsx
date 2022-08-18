import React, { useEffect, useState } from "react";
import Wallet from "./wallet";
import axios from 'axios';
import AddWalletModal from "../modals/addWallet";
import Loader from "../components/shared/Loader";
import Swal from "sweetalert2";

import "./style.scss"

export default function Accounts() {
    const [walletData, setWalletData] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [getNewData, setGetNewData] = useState(false)
    const [isLoaded, setIsLoaded] = useState(true)

    function ErrorAlert() {
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
            ErrorAlert()
        });
    }, [getNewData])

    return (
        <div className="accountsWrapper">
            <div className="addWalletSection">
                <div className="walletTittle">Wallet</div>
                <div className="addNew" onClick={() => { setModalIsOpen(true) }}>+ Add new wallet</div>
            </div>
            <div className="accounts">
                {isLoaded ? <Loader />
                    : walletData.map((item) => {
                        return (
                            <Wallet key={item.id}
                                item={item}
                            />
                        )
                    })

                }
            </div>
            <AddWalletModal isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} getNewData={getNewData} setGetNewData={setGetNewData} />
        </div>
    )
}