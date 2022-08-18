import React from "react";
import "./style.scss"

const sidebarData = ['Wallets','Prices','Peer2Peer','Activity','Settings']

export default function SideBar(){

    return(
        <div className="sideBarWrapper">
            <div className="sidebarContent">
              {
                  sidebarData.map((item  )=>{
                      return(
                        <div className="menuBar">
                            {item}
                        </div>
                      )
                  })
              }
            </div>
   
        </div>
     
    )
}