import React from "react";
import styles from  './Chat.module.css';
import { ChatInfo } from "./ChatInfo";
import { ChatUserPhoto } from "./ChatUserPhoto";


export function Chat(props) {

    return (
        <div className={styles.chat}>
            <ChatUserPhoto></ChatUserPhoto>
            <ChatInfo lastMessage={props.lastMessage}></ChatInfo>
        </div>
    )
}