import React, { useEffect, useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";

import "./style.scss"
import Loader from "../../components/shared/Loader";

export default function AddWalletModal({ isOpen, setModalIsOpen, updateDB, setSpdateDB }) {

    const [selectedWallet, setSelectedWallet] = useState('Stellar');
    const [sendServerWalletName, setSendServerWalletName] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)
    const [isError, setIsError] = useState(false)
    const [getDataAgain, setGetDataAgain] = useState(false)

    function ErrorAlert() {
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
        const getData = async () => {
            setIsLoaded(true);
            await axios.get(`http://localhost:3090/wallets`).then((res) => {
                setSendServerWalletName(res.data)
                setIsLoaded(false);
            }).catch((err) => {
                console.log(err);
                setIsError(true)
            });
        }
        getData();
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
            setSpdateDB(!updateDB);
            setModalIsOpen(false);
        } catch (err) {
            console.log(err);
        }

    }

    const changeFruit = (newSelect) => {
        setSelectedWallet(newSelect)
    }

    return (isOpen &&
        <div className="addWalletWrapper">
            <div className="modalInfo">
                <div className="title">
                    <h3>Add new wallet</h3>
                    <div><button onClick={() => setModalIsOpen(false)} className="closeModal">x</button></div>
                </div>
                <p>
                    The crypto wallet will be created instantly and be available in your list of wallets.
                </p>
                <div>
                    {
                        isError ? ErrorAlert()
                            : isLoaded ? <Loader />
                                : <form >
                                    <select
                                        onChange={(event) => changeFruit(event.target.value)}
                                        value={selectedWallet}
                                        className="select"
                                    >
                                        <option value="Stellar">Stellar</option>
                                        <option value="Litecoin">Litecoin</option>
                                        <option value="SureRemit">SureRemit</option>
                                        <option value="Tether">Tether</option>
                                        <option value="Ripple">Ripple</option>
                                        <option value="Dogecoin">Dogecoin</option>
                                        <option value="TRON">TRON</option>
                                    </select>
                                </form>
                    }

                </div>
                <div className="d-flex">
                    <button className="createdBtn" onClick={sendDatatoServer}>
                        Created
                    </button>
                </div>
            </div>
        </div>


    )
}