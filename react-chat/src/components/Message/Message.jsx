import React from "react";
import './Message.css';
import { parseTime } from "../../utils";


export function Message(props) {
    return (
        <div className="message-container">
            <div className="message-text">
               {props.text}
            </div>
            <div className="message-info">
                <div className="message-time">
                    {parseTime(props.time)}
                </div>
                <div className="message-status">
                    <span className="material-icons">done_all</span>
                </div>
            </div>
        </div>
    )
}