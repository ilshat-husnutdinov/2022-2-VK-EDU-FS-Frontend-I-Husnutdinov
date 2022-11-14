import React from "react";
import './UserInfo.css';


export function UserInfo() {
    return(
        <div className="info">
            <div className="name">
                Дженниффер
            </div>
            <div className="last-visit">
                была 2 часа назад
            </div>
        </div>
    )
}