import React from "react";
import './ArrowBack.css'


export function ArrowBack({ChangeDisplay}) {
    return (
        <div className="back" onClick={ChangeDisplay}>
                    <span className="material-icons">
                        arrow_back
                    </span>
        </div>
    )
}

