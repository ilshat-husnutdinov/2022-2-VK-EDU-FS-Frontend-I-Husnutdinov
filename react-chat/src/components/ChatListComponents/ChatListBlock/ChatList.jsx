import React from "react";
import styles from './ChatList.module.css';
import { Chat } from "./Chat";
import { getLastMessageFromLocStore } from "../../../utils";
import { Link } from "react-router-dom";
export function ChatList() {
    const chatsId = [1] // нужно будет получить id всех чатов
    const lastMessage = getLastMessageFromLocStore()

    return (
        <div className={styles.chats}>
            {chatsId.map(id =>
                    <Link to={`/chat/${id}`} key={id} style={{color:'inherit', textDecoration:'inherit'}}>
                        <Chat lastMessage={lastMessage}></Chat>
                    </Link>
                )
            }
        </div>
    )
}