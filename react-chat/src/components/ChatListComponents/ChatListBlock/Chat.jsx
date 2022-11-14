import React from "react";
import './Chat.css';
import { ChatInfo } from "./ChatInfo";
import { ChatUserPhoto } from "./ChatUserPhoto";


export function Chat(props) {

    return (
        <div className="chat" onClick={props.ChangeDisplay}>
            <ChatUserPhoto></ChatUserPhoto>
            <ChatInfo lastMessage={props.lastMessage}></ChatInfo>
        </div>
    )
}