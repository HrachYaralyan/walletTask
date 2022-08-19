import React, { useEffect, useState } from "react";
import Swal from "sweetalert2";
import axios from 'axios';
import styled from 'styled-components';
import Wallet from "./wallet";
import AddWalletModal from "../modals/addWallet";
import Loader from "../components/shared/Loader";

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
                <WalletTittle>Wallet</WalletTittle>
                <AddNew onClick={() => { setModalIsOpen(true) }}> + Add new wallet </AddNew>
            </AddWalletSection>
            <AccountsBox>
                {isLoaded ? <Loader />
                    : walletData.map((item) => {
                        return (
                            <Wallet key={item.id}
                                item={item}
                            />
                        )
                    })
                }
            </AccountsBox>
            <AddWalletModal isOpen={modalIsOpen} setModalIsOpen={setModalIsOpen} getNewData={getNewData} setGetNewData={setGetNewData} />
        </AccountsWrapper>
    )
}

const AccountsWrapper = styled.div`
width: 1200px;
height: 800px;
margin: 20px;
`;

const AddWalletSection = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin: 20px;
border-bottom: 1px solid rgb(6, 6, 6);
padding-bottom: 10px;
`;

const WalletTittle = styled.div`
font-family: 'Aribau Grotesk';
font-style: normal;
font-weight: 700;
font-size: 32px;
line-height: 32px;
margin-left: 20px;
`;

const AddNew = styled.div`
font-family: 'Aribau Grotesk';
font-style: normal;
font-weight: 500;
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

const AccountsBox = styled.div`
display: flex;
flex-wrap: wrap;
`;
