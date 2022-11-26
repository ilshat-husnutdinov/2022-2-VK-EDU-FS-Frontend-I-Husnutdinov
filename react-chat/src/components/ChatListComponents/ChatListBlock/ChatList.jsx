import React from "react";
import styles from './ChatList.module.css';
import { Chat } from "./Chat";
import { getLastMessageFromLocStore } from "../../../utils";
import { Link } from "react-router-dom";
export function ChatList() {
    const lastMessage = getLastMessageFromLocStore()

    return (
        <div className={styles.chats}>
            <Link to='/chat' style={{color:'inherit', textDecoration:'inherit'}}>
                <Chat lastMessage={lastMessage}></Chat>
            </Link>
        </div>
    )
}