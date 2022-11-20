import React from "react";
import styles from './ChatList.module.css';
import { Chat } from "./Chat";
import { getLastMessageFromLocStore } from "../../../utils";

export function ChatList(props) {
    const lastMessage = getLastMessageFromLocStore()

    return (
        <div className={styles.chats}>
            <Chat lastMessage={lastMessage} ChangeDisplay={props.ChangeDisplay} ></Chat>
        </div>
    )
}