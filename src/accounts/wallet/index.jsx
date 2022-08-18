import React from "react";

import arrow from '../../resources/pictures/arrow.png'

import "./style.scss"

export default function Wallet({ walletName, walletIMG, balance, currency }) {

    return (
        <div className="walletWrapper">
            <div className="container">
                <div className="title">
                    <div> <img src={walletIMG} alt="" className="walletIMG" /></div>
                    <h5>{walletName}</h5>
                </div>
                <div className="balance">
                    <h4>{balance}</h4> <div>{currency}</div>
                </div>

            </div>

            <img src={arrow} alt="" className="arrow" />
        </div>

    )
}