import React from "react";

import Logo from '../../resources/pictures/logo.png'
import userInfo from '../../resources/pictures/jacob.png'

import "./style.scss"


export default function Header(){

    return(
        <div className="headerWrapper">
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
            <div className="userName">
                <img src={userInfo} alt="" />
            </div>
        </div>
     
    )
}