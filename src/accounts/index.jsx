import React, { useEffect, useState } from "react";

import Wallet from "./wallet";
import axios from 'axios';
import AddWalletModal from "../modals/addWallet";
import Loader from "../components/shared/Loader";
import Swal from "sweetalert2";

import "./style.scss"

export default function Accounts() {

    const [accountDB, setAccountDB] = useState([]);
    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [updateDB, setSpdateDB] = useState(false)
    const [isLoaded, setIsLoaded] = useState(false)
    const [isError, setIsError] = useState(false)

    function ErrorAlert() {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="/">try Again ?</a>'
        })
    }
    useEffect(() => {
        const getData = async () => {
            setIsLoaded(true);
            await axios.get(`http://localhost:3090/accounts`).then((res) => {
                setAccountDB(res.data)
                setIsLoaded(false);
            }).catch((err) => {
                console.log(err);
                setIsError(true)
            });
        }
        getData();
    }, [updateDB])

    return (
        <div className="accountsWrapper">
            <div className="addWalletSection">
                <div className="walletTittle">Wallet</div>
                <div className="addNew" onClick={() => { setModalIsOpen(true) }}>+ Add new wallet</div>
            </div>
            <div className="accounts">
                {
                    isError ? ErrorAlert()
                        : isLoaded ? <Loader />
                            : accountDB.map((item, index) => {
                                return (
                                    <Wallet key={item.id}
                                        walletName={item.name}
                                        walletIMG={item.imgURL}
                                        balance={item.balance}
                                        currency={item.currency}
                                    />
                                )
                            })

                }
            </div>
            <AddWalletModal isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} updateDB={updateDB} setSpdateDB={setSpdateDB} />
        </div>
    )
}