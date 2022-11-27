import styles from './PageChatList.module.css';
import React from 'react';
import {
    ChatListHeader,
    ChatList,
    CreateChat
} from '../../components';


export function PageChatList() {
    return (
        <div className={styles.page_chatList} >
            <ChatListHeader></ChatListHeader>
            <ChatList></ChatList>
            <CreateChat></CreateChat>
        </div>
    )
}